/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import PriceFilter from '../PriceFilter';
import FilterButton from '@Custom/FilterButton/FilterButton';

const PriceFilterWithButton = () => {
  const [focused, setFocused] = useState(false);
  return (
    <div css={styled}>
      <FilterButton
        focused={focused}
        onClick={() => {
          setFocused(!focused);
        }}>
        $123
      </FilterButton>
      {focused && <PriceFilter />}
    </div>
  );
};

const styled = css`
  position: relative;
`;

export default PriceFilterWithButton;
