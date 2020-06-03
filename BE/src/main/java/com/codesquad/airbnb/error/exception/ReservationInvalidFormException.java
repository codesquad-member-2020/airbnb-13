package com.codesquad.airbnb.error.exception;

public class ReservationInvalidFormException extends RuntimeException {
    public ReservationInvalidFormException() {
        super("예약요청 형식이 잘못되었습니다.");
    }
}
