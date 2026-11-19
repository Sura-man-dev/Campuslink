package com.campuslink.campuslink;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.campuslink.campuslink.auth.CampusUser;
import com.campuslink.campuslink.auth.CampusUserRepository;

@SpringBootTest(properties = {
		"spring.datasource.url=jdbc:h2:mem:campuslink-tests;DB_CLOSE_DELAY=-1",
		"spring.datasource.username=sa",
		"spring.datasource.password=",
		"app.security.jwt-secret=local-test-secret-with-at-least-32-characters"
})
@AutoConfigureMockMvc
class CampuslinkApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private CampusUserRepository users;

	@Test
	void studentCanRegisterLoginAndAccessTheirProfile() throws Exception {
		String uniqueId = UUID.randomUUID().toString().replace("-", "");
		String username = "student" + uniqueId.substring(0, 8);
		String email = uniqueId + "@example.edu";
		String password = "campus-password-123";

		MvcResult registration = mockMvc.perform(post("/api/auth/register")
				.contentType(MediaType.APPLICATION_JSON)
				.content("""
						{"username":"%s","email":"%s","password":"%s"}
						""".formatted(username, email, password)))
				.andExpect(status().isCreated())
				.andReturn();

		String registrationToken = extractToken(registration.getResponse().getContentAsString());
		assertThat(registrationToken).isNotBlank();
		CampusUser savedUser = users.findByEmail(email).orElseThrow();
		assertThat(savedUser.getPasswordHash()).isNotEqualTo(password);

		mockMvc.perform(post("/api/auth/register")
				.contentType(MediaType.APPLICATION_JSON)
				.content("""
						{"username":"%s","email":"%s","password":"%s"}
						""".formatted(username, email, password)))
				.andExpect(status().isConflict());

		mockMvc.perform(post("/api/auth/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content("""
						{"email":"%s","password":"wrong-password"}
						""".formatted(email)))
				.andExpect(status().isUnauthorized());

		MvcResult login = mockMvc.perform(post("/api/auth/login")
				.contentType(MediaType.APPLICATION_JSON)
				.content("""
						{"email":"%s","password":"%s"}
						""".formatted(email.toUpperCase(), password)))
				.andExpect(status().isOk())
				.andReturn();

		String loginToken = extractToken(login.getResponse().getContentAsString());

		MvcResult profile = mockMvc.perform(get("/api/auth/me")
				.header("Authorization", "Bearer " + loginToken))
				.andExpect(status().isOk())
				.andReturn();

		assertThat(profile.getResponse().getContentAsString())
				.contains("\"username\":\"" + username + "\"")
				.contains("\"email\":\"" + email + "\"");

		mockMvc.perform(get("/api/auth/me"))
				.andExpect(status().isUnauthorized());
	}

	private String extractToken(String responseBody) {
		Matcher matcher = Pattern.compile("\"token\":\"([^\"]+)\"").matcher(responseBody);
		assertThat(matcher.find()).isTrue();
		return matcher.group(1);
	}
}
