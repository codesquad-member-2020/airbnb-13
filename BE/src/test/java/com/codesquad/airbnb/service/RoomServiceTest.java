package com.codesquad.airbnb.service;

import com.codesquad.airbnb.dto.Room;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class RoomServiceTest {

    @Autowired
    private RoomService roomService;

}
