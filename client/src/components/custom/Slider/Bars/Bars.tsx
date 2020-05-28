import React from 'react';
import Bar from '../Bar/Bar';
import { css } from '@emotion/core';
import FlexLayout from '../FlexLayout/FlexLayout';

const Bars = () => {
  return (
    <FlexLayout
      direction="row"
      align="spaceAround"
      customCSS={css`
        align-items: flex-end;
      `}>
      {BarData.map((count, index) => {
        return <Bar height={oneUnitHeight * count} isOn={isOnHandler(index)}></Bar>;
      })}
    </FlexLayout>
  );
};

export default Bars;
