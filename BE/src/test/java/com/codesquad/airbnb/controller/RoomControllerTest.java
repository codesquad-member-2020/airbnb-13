package com.codesquad.airbnb.controller;

import com.codesquad.airbnb.repository.RoomRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class RoomControllerTest {

    @Autowired
    private RoomRepository roomRepository;

    @InjectMocks
    private RoomController roomController;

    @Test
    public void rooms반환하는컨트롤러테스트() {
        //given
        RestTemplate restTemplate = new RestTemplate();

        String url = "http://localhost:8080" + "/rooms?page=1";

        //when
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        //then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
}
