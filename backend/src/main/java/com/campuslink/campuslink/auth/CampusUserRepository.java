package com.campuslink.campuslink.auth;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CampusUserRepository extends JpaRepository<CampusUser, Long> {

	boolean existsByEmail(String email);

	boolean existsByUsernameIgnoreCase(String username);

	Optional<CampusUser> findByEmail(String email);
}
