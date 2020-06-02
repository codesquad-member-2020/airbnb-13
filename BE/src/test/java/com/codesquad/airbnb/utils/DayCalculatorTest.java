package com.codesquad.airbnb.utils;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static org.assertj.core.api.Assertions.*;

class DayCalculatorTest {

    @Test
    public void 날짜계산기() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate day1 = LocalDate.parse("2020-01-01", formatter);
        LocalDate day2 = LocalDate.parse("2020-01-05", formatter);
        int dayCalculator = DayCalculator.getDiffDays(day1, day2);
        assertThat(dayCalculator).isEqualTo(4);
    }
}
