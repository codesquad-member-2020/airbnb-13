package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Reservation;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ReservationMapper implements RowMapper<Reservation> {

    @Override
    public Reservation mapRow(ResultSet rs, int rowNum) throws SQLException {
        return Reservation.builder()
                .id(rs.getLong("reservation_id"))
                .adult(rs.getInt("adult"))
                .child(rs.getInt("child"))
                .infant(rs.getInt("infant"))
                .title(rs.getString("title"))
                .location(rs.getString("location"))
                .thumbnail(rs.getString("thumbnail"))
                .superHost(rs.getBoolean("super_host"))
                .price(rs.getInt("price"))
                .roomId(rs.getLong("room_id"))
                .userId(rs.getLong("user_id"))
                .build();
    }
}
