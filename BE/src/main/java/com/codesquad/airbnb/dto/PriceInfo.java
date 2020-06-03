package com.codesquad.airbnb.dto;


import lombok.Getter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Getter
@ToString
public class PriceInfo {

    private List<Integer> price;

    private Integer averagePrice;

    private Integer minPrice;

    private Integer maxPrice;

    private Integer priceGap;

    public PriceInfo(List<Integer> priceList) {
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

    private List<Integer> countPrice(List<Integer> sortedList, Integer priceGap, int start, int size) {
        List<Integer> countList = new ArrayList<>();

        int listIndex = 0;
        int sizeIndex = 0;
        int count = 0;

        while (sizeIndex < size) {
            sizeIndex++;
            int range = priceGap * (sizeIndex) + start;

            while (listIndex < sortedList.size()) {
                if (sortedList.get(listIndex) <= range) {
                    listIndex++;
                    count++;
                } else {
                    break;
                }
            }
            countList.add(count);
            count = 0;

        }
        return countList;
    }
}
