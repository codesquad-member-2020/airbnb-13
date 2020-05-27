package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Room;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class RoomDao {

    private final NamedParameterJdbcTemplate namedJdbcTemplate;
    private final RoomMapper roomMapper = new RoomMapper();

    public RoomDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<Room> findByCondition(int offset, int limit,
                                      int adults, int children, int infants,
                                      String checkIn, String checkOut,
                                      int minPrice, int maxPrice) {
        int totalGuest = adults + children + infants;

        String roomsSql = "SELECT id, title, thumbnail, super_host, address, location, accommodates, " +
                "price, cleaning_fee, review_score " +
                "from room " +
                "WHERE accommodates >= :totalGuest " +
                "and price >= :minPrice ";

        if (maxPrice != 0) {
            roomsSql += "and price <= :maxPrice";
        }

        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("totalGuest", totalGuest)
                .addValue("minPrice", minPrice)
                .addValue("maxPrice", maxPrice);
        return namedJdbcTemplate.query(roomsSql, parameters, roomMapper);
    }


}