package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Room;
import com.codesquad.airbnb.utils.DayCalculator;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

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
                .discountedPrice(superHost ? discountPrice(rs.getInt("price")) : null)
                .reviewScore(rs.getFloat("review_score"))
                .thumbnail(rs.getString("thumbnail"))
                .build();
    }

    private Integer discountPrice(int price) {
        return (int) Math.floor(price * 0.9);
    }

    public Integer totalPrice(String checkIn, String checkOut, int price, boolean superHost) {
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat format = new SimpleDateFormat(pattern);
        try {
            Date checkInDate = format.parse(checkIn);
            Date checkOutDate = format.parse(checkOut);
            int dateDiff = DayCalculator.getDiffDays(checkInDate, checkOutDate);
            return superHost ? dateDiff * discountPrice(price) : dateDiff * price;
        } catch (Exception e) {
            return price;
        }
    }
}
