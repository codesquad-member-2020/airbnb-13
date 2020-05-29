package com.codesquad.airbnb.repository;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;


class RoomMapperTest {

    @Test
    public void 총가격테스트() {
        RoomMapper roomMapper = new RoomMapper();
        Integer testPrice = roomMapper.totalPrice("2020-05-01", "2020-05-05", 10000, true);
        assertThat(testPrice).isEqualTo(36000);
    }

}
