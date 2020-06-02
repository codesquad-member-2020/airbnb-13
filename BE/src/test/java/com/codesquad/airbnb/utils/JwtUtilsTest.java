package com.codesquad.airbnb.utils;

import com.codesquad.airbnb.dto.User;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.assertj.core.api.Assertions.*;

class JwtUtilsTest {

    private final Logger logger = LoggerFactory.getLogger(JwtUtilsTest.class);


    @Test
    public void JWT토큰제작하기() {
        User user = User.builder()
                .id(1L)
                .email("abc12@email.com")
                .build();
        String jwt = JwtUtils.jwtCreate(user);
        assertThat(jwt).isNotNull();
        logger.info("jwt = '{}'", jwt);
    }

    @Test
    public void JWT토큰파싱하기() {
        User user = User.builder()
                .id(1L)
                .email("abc12@email.com")
                .build();
        String jwt = JwtUtils.jwtCreate(user);
        String email = JwtUtils.jwtParsing(jwt);
        assertThat(email).isEqualTo("abc12@email.com");
    }

}
