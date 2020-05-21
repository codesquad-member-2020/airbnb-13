package com.codesquad.airbnb.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Room {

    private Long id;

    private Boolean superHost;

    private String location;

    private String title;

    private Integer price;

    private Float reviewScore;

    private String thumbnail;

    private Integer totalPrice;

    @Builder
    public Room(Long id, Boolean superHost, String location, String title, Integer price,
                Float reviewScore, String thumbnail, Integer totalPrice) {
        this.id = id;
        this.superHost = superHost;
        this.location = location;
        this.title = title;
        this.price = price;
        this.reviewScore = reviewScore;
        this.thumbnail = thumbnail;
        this.totalPrice = totalPrice;
    }
}
