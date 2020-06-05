package com.codesquad.airbnb.utils;

import com.codesquad.airbnb.dto.UserResponse;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.assertj.core.api.Assertions.*;

class JwtUtilsTest {

    private final Logger logger = LoggerFactory.getLogger(JwtUtilsTest.class);

    @Test
    public void JWT토큰제작하기() {
        UserResponse user = UserResponse.builder()
                .email("abc12@email.com")
                .build();
        String jwt = JwtUtils.jwtCreate(user);
        assertThat(jwt).isNotNull();
        logger.info("jwt = '{}'", jwt);
    }

    @Test
    public void JWT토큰파싱하기() {
        UserResponse user = UserResponse.builder()
                .email(null)
                .build();
        String jwt = JwtUtils.jwtCreate(user);
        String email = JwtUtils.jwtParsing(jwt);
        assertThat(email).isNull();
    }

}
