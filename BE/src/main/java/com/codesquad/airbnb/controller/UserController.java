package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.ReservationResponse;
import com.codesquad.airbnb.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<ReservationResponse>> userReservation() {
        Long userId = 1L;
        return new ResponseEntity<>(userService.reservationsByUserId(userId), HttpStatus.OK);
    }
}
