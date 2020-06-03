package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.Reservation;
import com.codesquad.airbnb.dto.ReservationDate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

@Repository
public class ReservationDao {

    private final NamedParameterJdbcTemplate namedJdbcTemplate;

    public ReservationDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<Reservation> findByUserId(Long userId) {
        String query = "SELECT reservation.id AS reservation_id, user_id, room_id, child, infant, adult, " +
                "room.title, room.thumbnail, room.location, room.super_host, room.price " +
                "FROM reservation JOIN room ON user_id = :userId and room_id = room.id";

        SqlParameterSource parameters = new MapSqlParameterSource().addValue("userId", userId);

        return namedJdbcTemplate.query(query, parameters, new ReservationMapper());
    }

    public ReservationDate findReservationDateByReservationId(Long reservationId) {
        String query = "SELECT MIN(reservation_date) as check_in, " +
                "MAX(reservation_date) AS check_out " +
                "FROM reservation_date WHERE reservation_id =  :reservationId";

        SqlParameterSource parameters = new MapSqlParameterSource().addValue("reservationId", reservationId);

        return namedJdbcTemplate.queryForObject(query, parameters, new RowMapper<ReservationDate>() {
            public ReservationDate mapRow(ResultSet rs, int rowNum) throws SQLException {

                return ReservationDate.builder()
                        .checkIn(LocalDate.parse(rs.getString("check_in")))
                        .checkOut(LocalDate.parse(rs.getString("check_out")))
                        .build();
            }
        });
    }
}
