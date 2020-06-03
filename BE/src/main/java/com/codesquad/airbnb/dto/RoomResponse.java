package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@Builder
public class RoomResponse {

    private final PriceInfo price;

    private final List<RoomInfo> room;
}
