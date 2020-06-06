package com.codesquad.airbnb.repository.mapper;

import com.codesquad.airbnb.dto.RoomPrice;
import com.codesquad.airbnb.utils.PriceCalculator;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RoomPriceMapper implements RowMapper<RoomPrice> {
    @Override
    public RoomPrice mapRow(ResultSet rs, int rowNum) throws SQLException {
        return RoomPrice.builder()
                .price(rs.getInt("price") * PriceCalculator.EXCHANGE_RATES)
                .cleaningFee(rs.getInt("cleaning_fee"))
                .superHost(rs.getBoolean("super_host"))
                .build();
    }
}
