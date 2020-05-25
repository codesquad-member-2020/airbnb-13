/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import GuestFilter from '../GuestFilter';
import FilterButton from '@Custom/FilterButton/FilterButton';

const GuestFilterWithButton = () => {
  const [focused, setFocused] = useState(false);
  return (
    <div css={styled}>
      <FilterButton
        focused={focused}
        onClick={() => {
          setFocused(!focused);
        }}
        onBlur={() => {
          setFocused(false);
        }}>
        게스트 1명, 유아 1명
      </FilterButton>
      {focused && <GuestFilter />}
    </div>
  );
};

const styled = css`
  position: relative;
`;

export default GuestFilterWithButton;
