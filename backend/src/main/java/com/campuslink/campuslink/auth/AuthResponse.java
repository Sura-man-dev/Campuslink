package com.campuslink.campuslink.auth;

import java.time.Instant;

public record AuthResponse(String token, Instant expiresAt, UserProfile user) {

	public record UserProfile(String username, String email) {
	}
}
