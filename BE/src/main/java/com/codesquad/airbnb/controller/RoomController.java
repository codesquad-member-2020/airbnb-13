package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.ReservationPreviewResponse;
import com.codesquad.airbnb.dto.ReservationRequest;
import com.codesquad.airbnb.dto.RoomResponse;
import com.codesquad.airbnb.dto.User;
import com.codesquad.airbnb.service.LoginService;
import com.codesquad.airbnb.service.RoomService;
import com.codesquad.airbnb.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@Log4j2
@RestController
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;
    private final LoginService loginService;

    @GetMapping("/rooms")
    public ResponseEntity<RoomResponse> rooms(@RequestParam("page") int page,
                                              @RequestParam(value = "adults", required = false, defaultValue = "0") int adults,
                                              @RequestParam(value = "children", required = false, defaultValue = "0") int children,
                                              @RequestParam(value = "infants", required = false, defaultValue = "0") int infants,
                                              @RequestParam(value = "checkin", required = false) String checkIn,
                                              @RequestParam(value = "checkout", required = false) String checkOut,
                                              @RequestParam(value = "minimum-price", required = false, defaultValue = "0") int minPrice,
                                              @RequestParam(value = "maximum-price", required = false, defaultValue = "0") int maxPrice) {

        final int limit = 9;
        final int offset = (limit * page) - limit;

        RoomResponse rooms = roomService.findPage(offset, limit,
                adults, children, infants,
                checkIn, checkOut,
                minPrice, maxPrice);
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }

    @PostMapping("/rooms/{id}")
    public ResponseEntity<String> reservation(@PathVariable Long id, @RequestBody ReservationRequest reservationForm,
                                              @CookieValue(value = "jwt", required = false) String cookie) {
        String email = JwtUtils.jwtParsing(cookie);
        User user = loginService.findUserByEmail(email);
        roomService.addReservation(id, user.getId(), reservationForm);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }

    @GetMapping("/rooms/{id}")
    public ResponseEntity<ReservationPreviewResponse> reservationPreview(@PathVariable Long id,
                                                                         @RequestParam(value = "adults", required = false, defaultValue = "0") int adults,
                                                                         @RequestParam(value = "children", required = false, defaultValue = "0") int children,
                                                                         @RequestParam(value = "infants", required = false, defaultValue = "0") int infants,
                                                                         @RequestParam(value = "checkin", required = false) String checkIn,
                                                                         @RequestParam(value = "checkout", required = false) String checkOut,
                                                                         @CookieValue(value = "jwt", required = false) String cookie) {
        String email = JwtUtils.jwtParsing(cookie);
        User user = loginService.findUserByEmail(email);
        ReservationPreviewResponse previewResponse = roomService.previewResponse(id, adults, children, infants,
                checkIn, checkOut);
        return new ResponseEntity<>(previewResponse, HttpStatus.OK);
    }
}
