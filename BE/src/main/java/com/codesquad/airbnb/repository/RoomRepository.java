package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Room;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RoomRepository extends CrudRepository<Room, Long> {
    @Query("SELECT id, title, thumbnail, super_host, address," +
            " location, accommodates, price, FLOOR(price * 0.9) as discounted_price, cleaning_fee, review_score" +
            " from room limit :limit offset :offset")

    List<Room> findByOffset(int offset, int limit);
}
