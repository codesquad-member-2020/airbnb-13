package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.ReservationForm;
import com.codesquad.airbnb.dto.RoomResponse;
import com.codesquad.airbnb.repository.RoomDao;
import com.codesquad.airbnb.utils.DayCalculator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomDao roomDao;

    public List<RoomResponse> findPage(int offset, int limit,
                                       int adults, int children, int infants,
                                       String checkIn, String checkOut,
                                       int minPrice, int maxPrice) {

        return roomDao.findByCondition(offset, limit,
                adults, children, infants,
                checkIn, checkOut,
                minPrice, maxPrice);
    }

    public void addReservation(Long roomId, ReservationForm reservationForm) {
        boolean isValid = isValidReservationForm(reservationForm);
        // Todo
        // 값이 유효하지 않을 때 예외 처리하기
        Long reservationId = roomDao.addReservation(roomId, reservationForm);
        addReservationDates(reservationId, reservationForm.getCheckIn(), reservationForm.getCheckOut());
    }

    private boolean isValidReservationForm(ReservationForm reservationForm) {
        LocalDate checkIn = reservationForm.getCheckIn();
        LocalDate checkOut = reservationForm.getCheckOut();

        if (checkIn == null || checkOut == null) {
            return false;
        }

        return DayCalculator.getDiffDays(checkIn, checkOut) > 0;
    }

    private void addReservationDates(Long reservationId, LocalDate checkIn, LocalDate checkOut) {
        long diff = DayCalculator.getDiffDays(checkIn, checkOut);
        Calendar calendar = Calendar.getInstance();

//        for (int i = 0; i < diff; i++) {
//            calendar.setTime(checkIn);
//            calendar.add(Calendar.DATE, i);
//            roomDao.addReservationDate(reservationId, calendar.getTime());
//        }
    }
}
