package com.campuslink.campuslink.auth;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

@RestControllerAdvice
public class AuthExceptionHandler {

	@ExceptionHandler(ResponseStatusException.class)
	public ResponseEntity<Map<String, String>> handleStatusException(ResponseStatusException exception) {
		return ResponseEntity.status(exception.getStatusCode())
				.body(Map.of("message", exception.getReason()));
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<Map<String, String>> handleValidationException(
			MethodArgumentNotValidException exception) {
		FieldError fieldError = exception.getBindingResult().getFieldErrors().getFirst();
		String message = fieldError.getDefaultMessage() == null
				? "Please check the submitted details."
				: fieldError.getDefaultMessage();
		return ResponseEntity.badRequest().body(Map.of("message", message));
	}

}
