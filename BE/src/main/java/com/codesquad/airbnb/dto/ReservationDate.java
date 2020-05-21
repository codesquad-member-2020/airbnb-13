package com.codesquad.airbnb.dto;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class ReservationDate {
    private String checkIn;

    private String checkOut;

    public ReservationDate(String checkIn, String checkOut) {
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
}
