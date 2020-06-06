package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@Builder
public class Reservation {

    private final Long id;

    private final Long userId;

    private final Long roomId;

    private final Integer child;

    private final Integer infant;

    private final Integer adult;

    private final String title;

    private final String location;

    private final Boolean superHost;

    private final Integer price;

    private final String thumbnail;
}
