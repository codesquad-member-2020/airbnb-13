package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.Guest;
import com.codesquad.airbnb.dto.Price;
import com.codesquad.airbnb.dto.ReservationDate;
import com.codesquad.airbnb.dto.Room;
import com.codesquad.airbnb.service.RoomService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Log4j2
@RestController
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/rooms")
    public ResponseEntity<List<Room>> rooms(@RequestParam("page") int page,
                                            @ModelAttribute Guest guest,
                                            @ModelAttribute ReservationDate reservationDate,
                                            @ModelAttribute Price price) {
        int offset = page - 1;
        int limit = page * 9;

        List<Room> rooms = roomService.findPage(offset, limit);
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }
}
