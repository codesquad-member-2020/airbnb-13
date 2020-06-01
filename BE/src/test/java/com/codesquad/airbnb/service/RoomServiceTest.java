package com.codesquad.airbnb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class RoomServiceTest {

    @Autowired
    private RoomService roomService;
}
