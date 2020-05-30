/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import GuestFilter from '../GuestFilter';
import FilterButton from '@Custom/FilterButton/FilterButton';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';

const GuestFilterWithButton = () => {
  const [focused, setFocused] = useState(false);
  const { adult, child, baby } = useSelector((state: RootState) => state.filterReducer);

  return (
    <div css={styled}>
      <FilterButton
        focused={focused}
        onClick={() => {
          setFocused(!focused);
        }}>
        게스트 {adult} 명 {child ? `어린이 ${child}명` : ''} {baby ? `유아 ${baby}명` : ''}
      </FilterButton>
      {focused && (
        <GuestFilter
          onBlur={() => {
            setFocused(false);
          }}
        />
      )}
    </div>
  );
};

const styled = css`
  position: relative;
`;

export default GuestFilterWithButton;
