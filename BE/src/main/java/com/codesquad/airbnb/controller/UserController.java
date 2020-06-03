package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.ReservationResponse;
import com.codesquad.airbnb.dto.User;
import com.codesquad.airbnb.service.LoginService;
import com.codesquad.airbnb.service.UserService;
import com.codesquad.airbnb.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final LoginService loginService;

    @GetMapping("/my-page")
    public ResponseEntity<List<ReservationResponse>> userReservation(@CookieValue(value = "jwt", required = false)
                                                                                 String cookie) {
        String email = JwtUtils.jwtParsing(cookie);
        User user = loginService.findUserByEmail(email);
        return new ResponseEntity<>(userService.reservationsByUserId(user.getId()), HttpStatus.OK);
    }
}
