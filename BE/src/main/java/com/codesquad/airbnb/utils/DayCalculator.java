package com.codesquad.airbnb.utils;

import java.util.Date;
import java.util.concurrent.TimeUnit;

public class DayCalculator {

    public static int getDiffDays(Date day1, Date day2) {
        long diff = day2.getTime() - day1.getTime();
        TimeUnit time = TimeUnit.MILLISECONDS;
        return (int) time.toDays(diff);
    }
}
