package com.codesquad.airbnb.dto;

import lombok.Getter;
import lombok.ToString;

import java.util.Date;

@Getter
@ToString
public class ReservationForm {

    private final Integer adults;

    private final Integer children;

    private final Integer infants;

    private final Date checkIn;

    private final Date checkOut;

    public ReservationForm(Integer adults, Integer children, Integer infants, Date checkIn, Date checkOut) {
        this.adults = adults;
        this.children = children;
        this.infants = infants;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
}
