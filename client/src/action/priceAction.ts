export const SET_PRICES = 'SET_PRICES';

export type PricesType = {
  price: number[];
  averagePrice: number;
  minPrice: number;
  maxPrice: number;
  priceGap: number;
};

export const setPrice = ({ price, averagePrice, minPrice, maxPrice, priceGap }: PricesType) => {
  return {
    type: SET_PRICES,
    priceGap,
    averagePrice,
    minPrice,
    maxPrice,
    price
  };
};

export type PriceAction = ReturnType<typeof setPrice>;
