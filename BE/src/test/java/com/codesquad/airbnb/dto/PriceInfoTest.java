package com.codesquad.airbnb.dto;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class PriceInfoTest {

    PriceInfo testPriceInfo = new PriceInfo(new ArrayList<>(Arrays.asList(10, 3, 5, 6, 30, 20, 10, 1, 2, 200, 80, 90, 25, 50, 40, 120, 140, 131, 160, 170, 0)));

    @Test
    void price_구간별_카운트_테스트() {

        List<Integer> expectList = new ArrayList<>(Arrays.asList(8, 1, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 2, 0, 1, 1, 0, 0, 1));

        assertThat(testPriceInfo.getPrice()).isEqualTo(expectList);
    }

    @Test
    void price_평균_테스트() {
        assertThat(testPriceInfo.getAveragePrice()).isEqualTo(61);
    }

    @Test
    void price_최솟() {
        assertThat(testPriceInfo.getMinPrice()).isEqualTo(0);
    }

    @Test
    void price_최댓값() {
        assertThat(testPriceInfo.getMaxPrice()).isEqualTo(200);
    }

    @Test
    void price_한_구간_범위() {
        assertThat(testPriceInfo.getPriceGap()).isEqualTo(10);
    }
}
