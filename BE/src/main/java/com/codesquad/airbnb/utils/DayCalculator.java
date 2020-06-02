package com.codesquad.airbnb.utils;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class DayCalculator {

    public static int getDiffDays(LocalDate day1, LocalDate day2) {

        return (int) ChronoUnit.DAYS.between(day1, day2);
    }
}
