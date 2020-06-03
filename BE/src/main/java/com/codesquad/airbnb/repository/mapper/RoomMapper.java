package com.codesquad.airbnb.repository.mapper;

import com.codesquad.airbnb.dto.Room;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RoomMapper implements RowMapper<Room> {

    @Override
    public Room mapRow(ResultSet rs, int rowNum) throws SQLException {
        Boolean superHost = rs.getBoolean("super_host");
        return Room.builder()
                .id(rs.getLong("id"))
                .superHost(superHost)
                .location(rs.getString("location"))
                .title(rs.getString("title"))
                .price(rs.getInt("price"))
                .reviewScore(rs.getFloat("review_score"))
                .thumbnail(rs.getString("thumbnail"))
                .build();
    }

}
