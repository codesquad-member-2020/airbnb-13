package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.Room;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

@WebMvcTest
class RoomServiceTest {

    @Autowired
    private RoomService roomService;

    @Test
    void findAll() {
        List<Room> rooms = roomService.findAll(1, 10);
        assertThat(rooms).isNotNull();
    }
}
