package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@Builder
@ToString
public class ReservationDate {

    LocalDate checkIn;

    LocalDate checkOut;

    public ReservationDate(LocalDate minDate, LocalDate maxDate) {
        this.checkIn = minDate;
        this.checkOut = maxDate.plusDays(1);
    }
}
