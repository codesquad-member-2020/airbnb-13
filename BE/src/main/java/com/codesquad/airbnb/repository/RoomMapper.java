package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Room;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RoomMapper implements RowMapper<Room> {
    @Override
    public Room mapRow(ResultSet rs, int rowNum) throws SQLException {
        return Room.builder()
                .id(rs.getLong("id"))
                .superHost(rs.getBoolean("super_host"))
                .location(rs.getString("location"))
                .title(rs.getString("title"))
                .price(rs.getInt("price"))
                .discountedPrice(discountPrice(rs.getInt("price"), rs.getBoolean("super_host")))
                .reviewScore(rs.getFloat("review_score"))
                .thumbnail(rs.getString("thumbnail"))
                .build();
    }

    private Integer discountPrice(int price, boolean superHost) {
        if(superHost) {
           return (int) Math.floor(price * 0.9);
        }
        return null;
    }
}
