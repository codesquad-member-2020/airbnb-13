package com.codesquad.airbnb.repository;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class UserDao {

    private final Long id;

    private final String email;

    @Builder
    public UserDao(Long id, String email) {
        this.id = id;
        this.email = email;
    }
}
