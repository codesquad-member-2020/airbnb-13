package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Price {
    private Integer minimumPrice;

    private Integer maximumPrice;

    @Builder
    public Price(Integer minimumPrice, Integer maximumPrice) {
        this.minimumPrice = minimumPrice;
        this.maximumPrice = maximumPrice;
    }
}
