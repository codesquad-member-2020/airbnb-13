package com.codesquad.airbnb.dto;

import com.codesquad.airbnb.utils.DayCalculator;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
public class ReservationResponse {

    private String title;

    private String location;

    private String thumbnail;

    private LocalDate checkIn;

    private LocalDate checkOut;

    private GuestResponse guestCount;

    private Integer totalPrice;

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
