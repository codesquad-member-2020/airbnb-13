package com.codesquad.airbnb.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class PriceCalculator {

    public static int calcDiscountPrice(int price) {
        return (int) Math.floor(price * 0.9);
    }

    public final static int EXCHANGE_RATES = 1216;

    public static int calcTotalPrice(String checkIn, String checkOut, int price, boolean superHost) {
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        try {
            LocalDate checkInDate = LocalDate.parse(checkIn, format);
            LocalDate checkOutDate = LocalDate.parse(checkOut, format);
            int dateDiff = DayCalculator.getDiffDays(checkInDate, checkOutDate);
            return superHost ? dateDiff * calcDiscountPrice(price) : dateDiff * price;
        } catch (Exception e) {
            return price;
        }
    }
}
