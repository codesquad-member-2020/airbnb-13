package com.codesquad.airbnb.dto;

import com.codesquad.airbnb.utils.DayCalculator;
import lombok.Getter;
import lombok.ToString;

import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@ToString
public class RoomResponse {

    private final Long id;

    private final Boolean superHost;

    private final String location;

    private final String title;

    private final Integer price;

    private final Float reviewScore;

    private final String thumbnail;

    private Integer discountPrice;

    private int totalPrice;

    public RoomResponse(Room room, String checkIn, String checkOut) {
        this.id = room.getId();
        this.superHost = room.getSuperHost();
        this.location = room.getLocation();
        this.title = room.getTitle();
        this.price = room.getPrice();
        this.reviewScore = room.getReviewScore();
        this.thumbnail = room.getThumbnail();
        this.discountPrice = superHost ? calcDiscountPrice(price) : null;
        this.totalPrice = calcTotalPrice(checkIn, checkOut, price, superHost);
    }

    private int calcDiscountPrice(int price) {
        return (int) Math.floor(price * 0.9);
    }

    private int calcTotalPrice(String checkIn, String checkOut, int price, boolean superHost) {
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat format = new SimpleDateFormat(pattern);
        try {
            Date checkInDate = format.parse(checkIn);
            Date checkOutDate = format.parse(checkOut);
            int dateDiff = DayCalculator.getDiffDays(checkInDate, checkOutDate);
            return superHost ? dateDiff * calcDiscountPrice(price) : dateDiff * price;
        } catch (Exception e) {
            return price;
        }
    }
}
