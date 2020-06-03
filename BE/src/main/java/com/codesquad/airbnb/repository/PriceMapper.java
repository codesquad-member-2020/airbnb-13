package com.codesquad.airbnb.repository;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PriceMapper implements RowMapper<Integer> {
    @Override
    public Integer mapRow(ResultSet rs, int rowNum) throws SQLException {
        boolean superHost = rs.getBoolean("super_host");
        int price = rs.getInt("price");
        return superHost ? price : (int) Math.floor(price * 0.9);
    }
}
