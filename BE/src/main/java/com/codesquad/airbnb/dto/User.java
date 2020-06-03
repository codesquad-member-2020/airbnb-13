package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class User {

    private final Long id;

    private final String email;

    @Builder
    public User(Long id, String email) {
        this.id = id;
        this.email = email;
    }
}
