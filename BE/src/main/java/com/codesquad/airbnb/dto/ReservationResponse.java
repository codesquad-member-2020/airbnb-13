package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
@Builder
public class ReservationResponse {

    private String title;

    private String location;

    private String thumbnail;

    private LocalDate checkIn;

    private LocalDate checkOut;

    private GuestResponse guestCount;

    private Integer totalPrice;
}
