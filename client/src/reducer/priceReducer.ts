import { SET_PRICES, setPrice, PriceAction, PricesType } from '@Action/priceAction';

type PriceState = PricesType;

const initialState = {
  price: [],
  averagePrice: 50,
  minPrice: 0,
  maxPrice: 100,
  priceGap: 1
};

const priceReducer = (state: PriceState = initialState, action: PriceAction) => {
  switch (action.type) {
    case SET_PRICES:
      const { price, averagePrice, minPrice, maxPrice, priceGap } = action as ReturnType<typeof setPrice>;
      return {
        price,
        averagePrice,
        minPrice,
        maxPrice,
        priceGap
      };
    default:
      return state;
  }
};

export default priceReducer;
