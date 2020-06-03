package com.codesquad.airbnb.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Room {

    private final Long id;

    private final Boolean superHost;

    private final String location;

    private final String title;

    private final Integer price;

    private final Float reviewScore;

    private final String thumbnail;

    @Builder
    public Room(Long id, Boolean superHost, String location, String title, Integer price,
                Float reviewScore, String thumbnail) {
        this.id = id;
        this.superHost = superHost;
        this.location = location;
        this.title = title;
        this.price = price;
        this.reviewScore = reviewScore;
        this.thumbnail = thumbnail;
    }
}
