export const SET_DATE_FILTER = 'SET_DATE_FILTER';
export const SET_GUEST_FILTER = 'SET_GUEST_FILTER';
export const SET_PRICE_FILTER = 'SET_PRICE_FILTER';

export type GuestType = 'adult' | 'child' | 'baby' | 'reset';

export const setDateFilter = (startDate: string, endDate: string) => {
  return {
    type: SET_DATE_FILTER,
    startDate,
    endDate
  };
};

export const setGuestFilter = (targetType: GuestType, count: number) => {
  return {
    type: SET_GUEST_FILTER,
    targetType,
    count
  };
};

export const setPriceFilter = (startPrice: number, endPrice: number) => {
  return {
    type: SET_PRICE_FILTER,
    startPrice,
    endPrice
  };
};

export type FilterAction =
  | ReturnType<typeof setDateFilter>
  | ReturnType<typeof setGuestFilter>
  | ReturnType<typeof setPriceFilter>;
