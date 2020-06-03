package com.codesquad.airbnb.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.ToString;

@Getter
@ToString
@RequiredArgsConstructor
public class UserResponse {

    @JsonProperty("email")
    private String email;

    @Builder
    public UserResponse(String email) {
        this.email = email;
    }
}
