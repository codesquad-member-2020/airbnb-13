package com.codesquad.airbnb.dto;

import com.codesquad.airbnb.utils.DayCalculator;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
public class ReservationResponse {

    private final String title;

    private final String location;

    private final String thumbnail;

    private final LocalDate checkIn;

    private final LocalDate checkOut;

    private final GuestResponse guestCount;

    private final Integer totalPrice;

    public ReservationResponse(Reservation reservation, ReservationDate reservationDate) {
        this.checkIn = reservationDate.getCheckIn();
        this.checkOut = reservationDate.getCheckOut();
        int diff = DayCalculator.getDiffDays(checkIn, checkOut);

        this.title = reservation.getTitle();
        this.location = reservation.getLocation();
        this.thumbnail = reservation.getThumbnail();
        this.guestCount = GuestResponse.builder()
                .adult(reservation.getAdult())
                .child(reservation.getChild())
                .infant(reservation.getInfant())
                .build();
        this.totalPrice = reservation.getSuperHost() ? diff * calcDiscountPrice(reservation.getPrice()) : diff * reservation.getPrice();
    }

    private int calcDiscountPrice(int price) {
        return (int) Math.floor(price * 0.9);
    }
}
