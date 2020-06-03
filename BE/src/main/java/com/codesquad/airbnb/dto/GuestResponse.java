package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@Builder
public class GuestResponse {

    private Integer adult;

    private Integer child;

    private Integer infant;
}
