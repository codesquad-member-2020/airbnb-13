package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.ReservationRequest;
import com.codesquad.airbnb.dto.RoomResponse;
import com.codesquad.airbnb.service.RoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

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
    public ResponseEntity<String> reservation(@PathVariable Long id, @RequestBody ReservationRequest reservationForm) {
        roomService.addReservation(id, reservationForm);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }
}
