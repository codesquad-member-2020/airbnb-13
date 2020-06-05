package com.codesquad.airbnb.error.exception;

public class JWTNotContainException extends RuntimeException {
    public JWTNotContainException() {
        super("JWT 토큰이 없습니다.");
    }
}
