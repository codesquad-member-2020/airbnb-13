package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Room;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class RoomDaoTest {

    @Autowired
    private RoomDao roomDao;

    @Test
    public void 룸Dao_최고가격_있는_테스트() {
        List<Room> rooms = roomDao.findByCondition(0, 9, 1, 1, 1,
                "2020-05-01", "2020-05-05", 10, 20);
        assertThat(rooms).isNotNull();
    }

    @Test
    public void 룸Dao_최고가격_없는_테스트() {
        List<Room> rooms = roomDao.findByCondition(0, 9, 1, 1, 1,
                "2020-05-01", "2020-05-05", 10, 0);
        assertThat(rooms).isNotNull();
    }
}
