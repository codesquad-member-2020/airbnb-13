package com.codesquad.airbnb.dto;

import com.codesquad.airbnb.utils.PriceCalculator;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
public class ReservationPreviewResponse {

    private final Integer price;

    private final String checkIn;

    private final String checkOut;

    private final Integer guestCount;

    private final Integer cleaningFee;

    private final Integer serviceFee;

    private final Integer occupancyFee;

    private final Integer totalPrice;

    public ReservationPreviewResponse(RoomPrice roomPrice, Integer guestCount,
                                      String checkIn, String checkOut) {
        this.price = roomPrice.getSuperHost() ?
                PriceCalculator.calcDiscountPrice(roomPrice.getPrice()) : roomPrice.getPrice();
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.guestCount = guestCount;
        this.cleaningFee = roomPrice.getCleaningFee();
        this.serviceFee = calcFee(price);
        this.occupancyFee = calcFee(price);
        this.totalPrice = PriceCalculator.calcTotalPrice(checkIn, checkOut, price, roomPrice.getSuperHost())
         + cleaningFee + serviceFee + occupancyFee;
    }

    private Integer calcFee(int price) {
        return (int) Math.floor(price * 0.05);
    }
}
