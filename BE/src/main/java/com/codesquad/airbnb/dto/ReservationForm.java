package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
public class ReservationForm {

    private final Integer adults;

    private final Integer children;

    private final Integer infants;

    private final LocalDate checkIn;

    private final LocalDate checkOut;

    @Builder
    public ReservationForm(Integer adults, Integer children, Integer infants, LocalDate checkIn, LocalDate checkOut) {
        this.adults = adults;
        this.children = children;
        this.infants = infants;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
}
