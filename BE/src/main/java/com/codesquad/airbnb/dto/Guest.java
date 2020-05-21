package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Guest {
    private Integer adult;

    private Integer children;

    private Integer infant;

    @Builder
    public Guest(Integer adult, Integer children, Integer infant) {
        this.adult = adult;
        this.children = children;
        this.infant = infant;
    }
}
