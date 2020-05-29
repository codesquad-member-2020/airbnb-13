/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import GuestFilter from '../GuestFilter';
import FilterButton from '@Custom/FilterButton/FilterButton';

type GuestProp = {
  adult: number;
  setAdult: React.Dispatch<React.SetStateAction<number>>;
  child: number;
  setChild: React.Dispatch<React.SetStateAction<number>>;
  baby: number;
  setBaby: React.Dispatch<React.SetStateAction<number>>;
};

const GuestFilterWithButton = ({ adult, setAdult, child, setChild, baby, setBaby }: GuestProp) => {
  const [focused, setFocused] = useState(false);

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
          setAdult={setAdult}
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
