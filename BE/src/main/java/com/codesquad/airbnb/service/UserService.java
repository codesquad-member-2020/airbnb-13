package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.Reservation;
import com.codesquad.airbnb.dto.ReservationDate;
import com.codesquad.airbnb.dto.ReservationResponse;
import com.codesquad.airbnb.repository.ReservationDao;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final ReservationDao reservationDao;

    public List<ReservationResponse> reservationsByUserId(Long userId) {
        List<Reservation> reservations = reservationDao.findByUserId(userId);
        System.out.println(reservations);

        return reservations.stream().map(reservation -> {
            ReservationDate reservationDate = reservationDao.findReservationDateByReservationId(reservation.getId());
            return new ReservationResponse(reservation, reservationDate);
        }).collect(Collectors.toList());
    }
}
