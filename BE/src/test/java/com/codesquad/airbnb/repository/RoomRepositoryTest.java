package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Room;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class RoomRepositoryTest {

    @Autowired
    private RoomRepository roomRepository;

    @Test
    public void id로_방가져오기() {

        Room room1 = roomRepository.findByRoomId(1L).orElseThrow(()
                -> new IllegalStateException("There is no category with this categoryId"));
        assertThat(room1).isNotNull();
        System.out.println(room1);
    }
}
