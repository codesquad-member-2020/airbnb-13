package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.ReservationRequest;
import com.codesquad.airbnb.dto.Room;
import com.codesquad.airbnb.repository.mapper.PriceMapper;
import com.codesquad.airbnb.repository.mapper.RoomMapper;
import com.codesquad.airbnb.dto.RoomInfo;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Repository
public class RoomDao {

    private final NamedParameterJdbcTemplate namedJdbcTemplate;
    private final RoomMapper roomMapper = new RoomMapper();

    public RoomDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    public List<RoomInfo> findByCondition(int offset, int limit,
                                          int adults, int children, int infants,
                                          String checkIn, String checkOut,
                                          int minPrice, int maxPrice) {
        int totalGuest = adults + children + infants;

        String roomsSql = "SELECT id, title, thumbnail, super_host, address, location, accommodates, " +
                "price, cleaning_fee, review_score " +
                "FROM room " +
                "WHERE id NOT IN ( SELECT DISTINCT (r.room_id) " +
                "FROM reservation_date rd LEFT JOIN reservation r ON rd.reservation_id = r.id " +
                "WHERE rd.reservation_date BETWEEN :checkIn AND :checkOut) " +
                "AND room.accommodates >= :totalGuest " +
                "AND room.price >= :minPrice ";

        if (maxPrice != 0) {
            roomsSql += "and price <= :maxPrice ";
        }

        roomsSql += "LIMIT :limit OFFSET :offset";

        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("totalGuest", totalGuest)
                .addValue("minPrice", minPrice)
                .addValue("maxPrice", maxPrice)
                .addValue("checkIn", checkIn)
                .addValue("checkOut", checkOut)
                .addValue("limit", limit)
                .addValue("offset", offset);

        List<Room> rooms = namedJdbcTemplate.query(roomsSql, parameters, roomMapper);
        return rooms.stream().map(room -> new RoomInfo(room, checkIn, checkOut)).collect(Collectors.toList());
    }

    public List<Integer> findPriceByCondition(int adults, int children, int infants,
                                              String checkIn, String checkOut,
                                              int minPrice, int maxPrice) {
        int totalGuest = adults + children + infants;

        String roomsSql = "SELECT price , super_host " +
                "FROM room " +
                "WHERE id NOT IN ( SELECT DISTINCT (r.room_id) " +
                "FROM reservation_date rd LEFT JOIN reservation r ON rd.reservation_id = r.id " +
                "WHERE rd.reservation_date BETWEEN :checkIn AND :checkOut) " +
                "AND room.accommodates >= :totalGuest " +
                "AND room.price >= :minPrice ";

        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("totalGuest", totalGuest)
                .addValue("minPrice", minPrice)
                .addValue("maxPrice", maxPrice)
                .addValue("checkIn", checkIn)
                .addValue("checkOut", checkOut);

        if (maxPrice != 0) {
            roomsSql += "and price <= :maxPrice ";
        }

        return namedJdbcTemplate.query(roomsSql, parameters, new PriceMapper());
    }

    public Long addReservation(Long roomId, Long userId, ReservationRequest reservationForm) {

        String sql = "INSERT INTO reservation (adult, child, infant, user_id, room_id) " +
                "VALUES (:adult, :child, :infant, :userId, :roomId)";

        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("adult", reservationForm.getAdults())
                .addValue("child", reservationForm.getChildren())
                .addValue("infant", reservationForm.getInfants())
                .addValue("userId", userId)
                .addValue("roomId", roomId);

        KeyHolder keyHolder = new GeneratedKeyHolder();
        namedJdbcTemplate.update(sql, parameters, keyHolder);

        return Objects.requireNonNull(keyHolder.getKey()).longValue();
    }

    public void addReservationDate(Long reservationId, LocalDate date) {
        String sql = "INSERT INTO reservation_date (reservation_id , reservation_date)" +
                "VALUES (:reservationId, :reservationDate)";
        SqlParameterSource parameters = new MapSqlParameterSource()
                .addValue("reservationId", reservationId)
                .addValue("reservationDate", date);

        namedJdbcTemplate.update(sql, parameters);
    }

}
