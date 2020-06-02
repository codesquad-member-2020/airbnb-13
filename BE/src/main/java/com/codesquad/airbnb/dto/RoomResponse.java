package com.codesquad.airbnb.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@Builder
public class RoomResponse {

    private PriceInfo price;

    private List<RoomInfo> room;
}
