package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Room;
import net.bytebuddy.asm.Advice;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class RoomRepositoryTest {

    @Autowired
    private RoomRepository roomRepository;

    @Test
    public void 페이지10개내용가져오기() {
        List<Room> rooms = roomRepository.findByOffset(0, 10);
        assertThat(rooms).isNotNull();
    }
}
