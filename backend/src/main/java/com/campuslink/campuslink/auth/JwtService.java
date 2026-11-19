package com.campuslink.campuslink.auth;

import java.time.Instant;
import java.time.temporal.ChronoUnit;

import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

	private final JwtEncoder jwtEncoder;

	public JwtService(JwtEncoder jwtEncoder) {
		this.jwtEncoder = jwtEncoder;
	}

	public AuthResponse createToken(CampusUser user) {
		Instant issuedAt = Instant.now();
		Instant expiresAt = issuedAt.plus(8, ChronoUnit.HOURS);
		JwtClaimsSet claims = JwtClaimsSet.builder()
				.issuer("campuslink")
				.issuedAt(issuedAt)
				.expiresAt(expiresAt)
				.subject(user.getEmail())
				.claim("username", user.getUsername())
				.build();
		JwsHeader header = JwsHeader.with(MacAlgorithm.HS256).build();
		String token = jwtEncoder.encode(JwtEncoderParameters.from(header, claims)).getTokenValue();

		return new AuthResponse(token, expiresAt,
				new AuthResponse.UserProfile(user.getUsername(), user.getEmail()));
	}
}
