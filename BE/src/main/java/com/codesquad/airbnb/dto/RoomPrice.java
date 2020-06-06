package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@Builder
public class RoomPrice {

    private final Integer price;

    private final Integer cleaningFee;

    private final Boolean superHost;
}
