package com.codesquad.airbnb.repository.mapper;

import com.codesquad.airbnb.utils.PriceCalculator;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PriceMapper implements RowMapper<Integer> {
    @Override
    public Integer mapRow(ResultSet rs, int rowNum) throws SQLException {
        boolean superHost = rs.getBoolean("super_host");
        int price = rs.getInt("price") * PriceCalculator.EXCHANGE_RATES;
        return superHost ? price : (int) Math.floor(price * 0.9);
    }
}
