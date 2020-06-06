package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.ReservationRequest;
import com.codesquad.airbnb.dto.ReservationResponse;
import com.codesquad.airbnb.service.LoginService;
import com.codesquad.airbnb.service.RoomService;
import com.codesquad.airbnb.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
class UserControllerTest {

    @Autowired
    private LoginService loginService;

    @Autowired
    private UserService userService;

    @Autowired
    private RoomService roomService;

    @Test
    public void 마이페이지_확인() {
        //given
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate day1 = LocalDate.parse("2020-02-01", formatter);
        LocalDate day2 = LocalDate.parse("2020-02-05", formatter);
        roomService.addReservation(3L, 4L, ReservationRequest.builder()
                .adults(1)
                .children(1)
                .checkIn(day1)
                .checkOut(day2).build());
        //when
        List<ReservationResponse> reservationList = userService.reservationsByUserId(4L);

        //then
        assertThat(reservationList.get(0).getGuestCount().getAdult()).isEqualTo(1);
    }

}
