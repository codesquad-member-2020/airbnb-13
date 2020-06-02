package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.ReservationForm;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
class RoomDaoTest {

    @Autowired
    private RoomDao roomDao;

    @Test
    public void 예약날짜_잘나오는가() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate day1 = LocalDate.parse("2020-01-01", formatter);
        LocalDate day2 = LocalDate.parse("2020-01-02", formatter);
        Long reservationId = roomDao.addReservation(1L, ReservationForm.builder()
                .adults(1)
                .children(1)
                .infants(3)
                .checkIn(day1)
                .checkOut(day2)
                .build());
        roomDao.addReservationDate(reservationId, day1);
    }


}
