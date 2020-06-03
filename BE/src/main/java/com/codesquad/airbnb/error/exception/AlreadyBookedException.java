package com.codesquad.airbnb.error.exception;

public class AlreadyBookedException extends RuntimeException {
    public AlreadyBookedException() {
        super("이미 예약된 숙소입니다.");
    }
}
