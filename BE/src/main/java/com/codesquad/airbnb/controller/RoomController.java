package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.dto.Guest;
import com.codesquad.airbnb.dto.Price;
import com.codesquad.airbnb.dto.ReservationDate;
import com.codesquad.airbnb.dto.Room;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Log4j2
@RestController
public class RoomController {
    @GetMapping("/rooms")
    public ResponseEntity<List<Room>> rooms(@ModelAttribute Guest guest,
                                            @ModelAttribute ReservationDate reservationDate,
                                            @ModelAttribute Price price) {

        List<Room> rooms = new ArrayList<>();

        Room room1 = Room.builder()
                .id(1L)
                .superHost(true)
                .location("seoul")
                .price(70000)
                .title("High-End Studio! ~ In the heart of Seoul")
                .reviewScore(3.8f)
                .thumbnail("https://a0.muscache.com/im/pictures/64453da3-bd55-4957-9f7f-faad648b4185.jpg?aki_policy=xx_large")
                .totalPrice(70000)
                .build();

        Room room2 = Room.builder()
                .id(2L)
                .superHost(true)
                .location("United States")
                .price(140000)
                .title("Chemically sensitive? We've removed the irritants triggering allergy or asthma attacks, like carpeting, forced air & used pillows, all culprits that harbor fungus, mold & bacteria.  No smoking, no pets.  Designed for healthy living, so breathe easy.")
                .reviewScore(3.8f)
                .thumbnail("https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70")
                .totalPrice(140000)
                .build();

        Room room3 = Room.builder()
                .id(1L)
                .superHost(true)
                .location("United States")
                .price(70000)
                .title("Stunning Designsponge featured 6 bed, 3.75 bath, 4,000 sq ft home in the city's BEST location w/ free parking for about the same price as a decent hotel in Seattle. Walk to all of Queen Anne, or drive 5 min to downtown- this is where you want to be!")
                .reviewScore(3.8f)
                .thumbnail("https://a2.muscache.com/ac/pictures/91278310/1ed06e04_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70")
                .totalPrice(70000)
                .build();

        rooms.add(room1);
        rooms.add(room2);
        rooms.add(room3);
        log.info("##### guest : '{}'", guest);
        log.info("##### date : '{}'", reservationDate);
        log.info("##### money : '{}'", price);
        return new ResponseEntity<>(rooms, HttpStatus.OK);
    }
}
