package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.*;
import com.codesquad.airbnb.error.exception.AlreadyBookedException;
import com.codesquad.airbnb.error.exception.ReservationInvalidFormException;
import com.codesquad.airbnb.repository.RoomDao;
import com.codesquad.airbnb.utils.DayCalculator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomDao roomDao;

    public RoomResponse findPage(int offset, int limit,
                                 int adults, int children, int infants,
                                 String checkIn, String checkOut,
                                 int minPrice, int maxPrice) {

        List<RoomInfo> rooms = roomDao.findByCondition(offset, limit,
                adults, children, infants,
                checkIn, checkOut,
                minPrice, maxPrice);

        PriceInfo price = new PriceInfo(roomDao.findPriceByCondition(adults, children, infants,
                checkIn, checkOut, minPrice, maxPrice));

        return RoomResponse.builder().price(price).room(rooms).build();
    }

    public void addReservation(Long roomId, Long userId, ReservationRequest reservationForm) {
        boolean isValid = isValidReservationForm(reservationForm);
        if (!isValid) {
            throw new ReservationInvalidFormException();
        }
        if (roomDao.findReservation(roomId, reservationForm.getCheckIn(), reservationForm.getCheckOut()).size() > 0) {
            throw new AlreadyBookedException();
        }

        Long reservationId = roomDao.addReservation(roomId, userId, reservationForm);
        addReservationDates(reservationId, reservationForm.getCheckIn(), reservationForm.getCheckOut());
    }

    public ReservationPreviewResponse previewResponse(Long id, int adults, int children, int infants,
                                                      String checkIn, String checkOut) {
        int guestCount = adults + children + infants;
        RoomPrice roomPrice = roomDao.findRoomByRoomId(id);
        return new ReservationPreviewResponse(roomPrice, guestCount, checkIn, checkOut);
    }

    private boolean isValidReservationForm(ReservationRequest reservationForm) {
        LocalDate checkIn = reservationForm.getCheckIn();
        LocalDate checkOut = reservationForm.getCheckOut();

        if (checkIn == null || checkOut == null) {
            return false;
        }

        return DayCalculator.getDiffDays(checkIn, checkOut) > 0;
    }

    private void addReservationDates(Long reservationId, LocalDate checkIn, LocalDate checkOut) {
        long diff = DayCalculator.getDiffDays(checkIn, checkOut);

        for (int i = 0; i < diff; i++) {
            roomDao.addReservationDate(reservationId, checkIn.plusDays(i));
        }
    }
}
