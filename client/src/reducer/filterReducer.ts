import {
  SET_DATE_FILTER,
  SET_GUEST_FILTER,
  SET_PRICE_FILTER,
  FilterAction,
  setDateFilter,
  setGuestFilter,
  setPriceFilter,
  GuestType
} from '@Action/filterAction';

type FilterState = {
  startDate: string;
  endDate: string;
  adult: number;
  child: number;
  baby: number;
  startPrice: number;
  endPrice: number;
};

const initialState = {
  startDate: '',
  endDate: '',
  adult: 0,
  child: 0,
  baby: 0,
  startPrice: 0,
  endPrice: 0
};

const handleGuestFilter = (type: GuestType, count: number) => {
  switch (type) {
    case 'adult':
      return {
        adult: count
      };
    case 'child':
      return {
        child: count
      };
    case 'baby':
      return {
        baby: count
      };
    default:
      return {
        adult: 0,
        child: 0,
        baby: 0
      };
  }
};

const modalReducer = (state: FilterState = initialState, action: FilterAction) => {
  switch (action.type) {
    case SET_DATE_FILTER:
      const { startDate, endDate } = action as ReturnType<typeof setDateFilter>;
      return {
        ...state,
        startDate,
        endDate
      };
    case SET_GUEST_FILTER:
      const { targetType, count } = action as ReturnType<typeof setGuestFilter>;
      const resultObj = handleGuestFilter(targetType, count);
      return {
        ...state,
        ...resultObj
      };
    case SET_PRICE_FILTER:
      const { startPrice, endPrice } = action as ReturnType<typeof setPriceFilter>;
      return {
        ...state,
        startPrice,
        endPrice
      };
    default:
      return {
        ...state
      };
  }
};

export default modalReducer;
