/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import GuestFilter from '../GuestFilter';
import FilterButton from '@Custom/FilterButton/FilterButton';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';
import { FilterButtonProp } from '@Filters/Filters';

const GuestFilterWithButton = ({ focus, setFocus, setRefTarget }: FilterButtonProp) => {
  const { guest } = focus;
  const { adult, child, baby } = useSelector((state: RootState) => state.filterReducer);

  return (
    <div css={styled} ref={setRefTarget}>
      <FilterButton
        focused={guest}
        onClick={() => {
          setFocus({ price: false, guest: true });
        }}>
        게스트 {adult} 명 {child ? `어린이 ${child}명` : ''} {baby ? `유아 ${baby}명` : ''}
      </FilterButton>
      {guest && <GuestFilter />}
    </div>
  );
};

const styled = css`
  position: relative;
`;

export default GuestFilterWithButton;
