package com.codesquad.airbnb.dto;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;

class RoomInfoTest {

    @Test
    public void RoomResponse_확인테스트() {
        Room room = Room.builder()
                .id(1L)
                .superHost(false)
                .location("서울")
                .title("abc")
                .price(10000)
                .reviewScore(3.34f)
                .thumbnail("http://naver.com")
                .build();

        RoomInfo roomResponse = new RoomInfo(room, "2020-05-01", "2020-05-05");
        assertThat(roomResponse.getTotalPrice()).isEqualTo(40000);
        assertThat(roomResponse.getDiscountPrice()).isEqualTo(null);
    }


}
