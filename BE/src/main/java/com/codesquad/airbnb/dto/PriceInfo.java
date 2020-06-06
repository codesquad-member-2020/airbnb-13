package com.codesquad.airbnb.dto;


import lombok.Getter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Getter
@ToString
public class PriceInfo {

    private final List<Integer> price;

    private final Integer averagePrice;

    private final Integer minPrice;

    private final Integer maxPrice;

    private final Integer priceGap;

    public PriceInfo(List<Integer> priceList) {
        if (priceList.isEmpty()) {
            this.maxPrice = 0;
            this.minPrice = 0;
            this.price = new ArrayList<>();
            this.averagePrice = 0;
            this.priceGap = 0;
            return;
        }

        int priceSize = 20;
        Collections.sort(priceList);
        Integer sum = calcSum(priceList);

        this.maxPrice = priceList.get(priceList.size() - 1);
        this.minPrice = priceList.get(0);
        this.averagePrice = sum / priceList.size();
        this.priceGap = (int) Math.ceil((double) (maxPrice - minPrice) / priceSize);

        this.price = countPrice(priceList, priceGap, minPrice, priceSize);
    }

    private Integer calcSum(List<Integer> priceList) {
        return priceList.stream().reduce(0, Integer::sum);
    }

    private List<Integer> countPrice(List<Integer> sortedList, Integer priceGap, int minPrice, int sectionSize) {
        List<Integer> countList = new ArrayList<>();

        int sortListIndex = 0;
        int sizeIndex = 0;
        int roomCount = 0;

        while (sizeIndex < sectionSize) {
            sizeIndex++;
            int maxValueOfSection = priceGap * (sizeIndex) + minPrice;

            while (sortListIndex < sortedList.size()) {
                if (sortedList.get(sortListIndex) <= maxValueOfSection) {
                    sortListIndex++;
                    roomCount++;
                    continue;
                }
                break;
            }
            countList.add(roomCount);
            roomCount = 0;

        }
        return countList;
    }
}
