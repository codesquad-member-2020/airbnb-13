/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import GuestFilter from '../GuestFilter';
import FilterButton from '@Custom/FilterButton/FilterButton';

const GuestFilterWithButton = () => {
  const [focused, setFocused] = useState(false);
  const [adult, setAudlt] = useState(0);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);

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
          adult={adult}
          setAdult={setAudlt}
          child={child}
          setChild={setChild}
          baby={baby}
          setBaby={setBaby}
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
