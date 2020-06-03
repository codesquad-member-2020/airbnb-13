package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@Builder
public class GuestResponse {

    private final Integer adult;

    private final Integer child;

    private final Integer infant;
}
