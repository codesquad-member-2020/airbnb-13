/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import PriceFilter from '../PriceFilter';
import FilterButton from '@Custom/FilterButton/FilterButton';
import { FilterButtonProp } from '@Filters/Filters';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';

const PriceFilterWithButton = ({ focus, setFocus, setRefTarget }: FilterButtonProp) => {
  const { price } = focus;
  const { averagePrice } = useSelector((state: RootState) => state.priceReducer);
  return (
    <div css={styled} ref={setRefTarget}>
      <FilterButton
        focused={price}
        onClick={() => {
          setFocus({ guest: false, price: true });
        }}>
        ${averagePrice}
      </FilterButton>
      {price && <PriceFilter />}
    </div>
  );
};

const styled = css`
  position: relative;
`;

export default PriceFilterWithButton;
