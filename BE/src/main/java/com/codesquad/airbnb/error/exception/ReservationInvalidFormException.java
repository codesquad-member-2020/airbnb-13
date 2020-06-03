package com.codesquad.airbnb.error.exception;

public class ReservationInvalidFormException extends RuntimeException {
    public ReservationInvalidFormException() {
        super("유효한 예약폼이 아닙니다.");
    }
}
