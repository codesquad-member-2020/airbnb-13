package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@Builder
public class Reservation {

    private Long id;

    private Long userId;

    private Long roomId;

    private Integer child;

    private Integer infant;

    private Integer adult;

    private String title;

    private String location;

    private Boolean superHost;

    private Integer price;

    private String thumbnail;
}
