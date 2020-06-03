/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, Dispatch, SetStateAction } from 'react';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import PriceFilterWithButton from './PriceFilter/PriceFilterWithButton/PriceFilterWithButton';
import GuestFilterWithButton from './GuestFilter/GuestFilterWithButton/GuestFilterWithButton';
import DateFilter from './DateFilter/DateFilter';

export type FilterFocus = {
  guest: boolean;
  price: boolean;
};

export type FilterButtonProp = {
  focus: FilterFocus;
  setFocus: Dispatch<SetStateAction<FilterFocus>>;
  setRefTarget: (a: HTMLDivElement | null) => void;
};

const Filters = () => {
  const [focus, setFocus] = useState<FilterFocus>({ guest: false, price: false });
  const [guestRefer, setGuestRefer] = useState<HTMLDivElement | null>(null);
  const [priceRefer, setPriceRefer] = useState<HTMLDivElement | null>(null);
  const setGuestRef = (guestRef: HTMLDivElement | null) => {
    setGuestRefer(guestRef);
  };

  const setPriceRef = (priceRef: HTMLDivElement | null) => {
    setPriceRefer(priceRef);
  };

  return (
    <FlexLayout direction={'row'} align={'left'} gap={'10px'}>
      <DateFilter />
      <GuestFilterWithButton focus={focus} setFocus={setFocus} setRefTarget={setGuestRefer} />
      <PriceFilterWithButton focus={focus} setFocus={setFocus} setRefTarget={setPriceRefer} />
    </FlexLayout>
  );
};

export default Filters;
