package com.codesquad.airbnb.repository;

import com.codesquad.airbnb.dto.User;
import com.codesquad.airbnb.dto.UserResponse;
import com.codesquad.airbnb.repository.mapper.UserMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.core.simple.SimpleJdbcInsertOperations;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.Map;

@Repository
public class UserDao {

    private final NamedParameterJdbcTemplate namedJdbcTemplate;
    private final UserMapper userMapper = new UserMapper();
    private final SimpleJdbcInsertOperations insertions;

    public UserDao(DataSource dataSource) {
        this.namedJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.insertions = new SimpleJdbcInsert(dataSource).withTableName("user");
    }

    public User findByEmail(String email) {
        String userSql = "SELECT id, email FROM user WHERE email = :email";
        SqlParameterSource parameters = new MapSqlParameterSource("email", email);
        return namedJdbcTemplate.queryForObject(userSql, parameters, userMapper);
    }
    
    public void saveUserDao(UserResponse userResponse) {
        Map<String, Object> parameters = new HashMap<>();
        parameters.put("email", userResponse.getEmail());
        insertions.execute(parameters);
    }
}
