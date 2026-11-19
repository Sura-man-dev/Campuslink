package com.campuslink.campuslink.auth;

import java.nio.charset.StandardCharsets;
import java.util.Locale;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthService {

	private final CampusUserRepository users;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;

	public AuthService(CampusUserRepository users, PasswordEncoder passwordEncoder, JwtService jwtService) {
		this.users = users;
		this.passwordEncoder = passwordEncoder;
		this.jwtService = jwtService;
	}

	@Transactional
	public AuthResponse register(RegisterRequest request) {
		validatePasswordLength(request.password());
		String email = normalizeEmail(request.email());
		if (users.existsByEmail(email)) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, "An account with this email already exists.");
		}
		if (users.existsByUsernameIgnoreCase(request.username())) {
			throw new ResponseStatusException(HttpStatus.CONFLICT, "This username is already taken.");
		}

		try {
			CampusUser user = users.saveAndFlush(new CampusUser(
					request.username().trim(),
					email,
					passwordEncoder.encode(request.password())));
			return jwtService.createToken(user);
		} catch (DataIntegrityViolationException exception) {
			throw new ResponseStatusException(HttpStatus.CONFLICT,
					"An account with this email or username already exists.", exception);
		}
	}

	@Transactional(readOnly = true)
	public AuthResponse login(LoginRequest request) {
		validatePasswordLength(request.password());
		String email = normalizeEmail(request.email());
		CampusUser user = users.findByEmail(email)
				.filter(candidate -> passwordEncoder.matches(request.password(), candidate.getPasswordHash()))
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED,
						"Email or password is incorrect."));
		return jwtService.createToken(user);
	}

	private String normalizeEmail(String email) {
		return email.trim().toLowerCase(Locale.ROOT);
	}

	private void validatePasswordLength(String password) {
		if (password.getBytes(StandardCharsets.UTF_8).length > 72) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					"Password must be no more than 72 bytes when encoded.");
		}
	}
}
