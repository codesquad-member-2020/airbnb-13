package com.codesquad.airbnb.dto;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class RoomTest {

    @Test
    public void Room객체가생기는지테스트() {
        Room room = Room.builder()
                .id(1L)
                .location("서울")
                .price(50000)
                .reviewScore(5.8f)
                .superHost(true)
                .thumbnail("http://sldkjf")
                .totalPrice(100000)
                .title("서울 집")
                .build();

        assertThat(room.getTitle()).isEqualTo("서울 집");
    }
}
