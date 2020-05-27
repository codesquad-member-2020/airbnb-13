package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Room;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends CrudRepository<Room, Long> {

    @Query("SELECT * FROM room WHERE id =:id")
    Optional<Room> findByRoomId(Long id);
}
