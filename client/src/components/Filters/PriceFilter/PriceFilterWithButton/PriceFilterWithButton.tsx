/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import PriceFilter from '../PriceFilter';
import FilterButton from '@Custom/FilterButton/FilterButton';
import { FilterButtonProp } from '@Filters/Filters';

const PriceFilterWithButton = ({ focus, setFocus, setRefTarget }: FilterButtonProp) => {
  const { price } = focus;
  return (
    <div css={styled} ref={setRefTarget}>
      <FilterButton
        focused={price}
        onClick={() => {
          setFocus({ guest: false, price: true });
        }}>
        $123
      </FilterButton>
      {price && <PriceFilter />}
    </div>
  );
};

const styled = css`
  position: relative;
`;

export default PriceFilterWithButton;
