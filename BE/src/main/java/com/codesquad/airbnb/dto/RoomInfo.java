package com.codesquad.airbnb.dto;

import com.codesquad.airbnb.utils.DayCalculator;
import com.codesquad.airbnb.utils.PriceCalculator;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Getter
@ToString
public class RoomInfo {

    private final Long id;

    private final Boolean superHost;

    private final String location;

    private final String title;

    private final Integer price;

    private final Float reviewScore;

    private final String thumbnail;

    private final Integer discountPrice;

    private final int totalPrice;

    public RoomInfo(Room room, String checkIn, String checkOut) {
        this.id = room.getId();
        this.superHost = room.getSuperHost();
        this.location = room.getLocation();
        this.title = room.getTitle();
        this.price = room.getPrice();
        this.reviewScore = room.getReviewScore();
        this.thumbnail = room.getThumbnail();
        this.discountPrice = superHost ? PriceCalculator.calcDiscountPrice(price) : null;
        this.totalPrice = PriceCalculator.calcTotalPrice(checkIn, checkOut, price, superHost);
    }
}
