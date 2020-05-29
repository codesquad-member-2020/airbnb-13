import React from 'react';
import Bar, { BarProp } from './Bar/Bar';
import { css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import useDrawingBars from '$Util/customHooks/useDrawingBars';

type BarLimit = {
  min: number;
  max: number;
};

type BarsProp = {
  barData: number[];
  maxHeight: number;
  limit: BarLimit;
};

const Bars = ({ barData, maxHeight, limit }: BarsProp) => {
  const [setBarData, oneUnitHeight, isOn] = useDrawingBars(barData, maxHeight);

  return (
    <FlexLayout
      direction="row"
      align="spaceAround"
      customCSS={css`
        align-items: flex-end;
      `}>
      {barData.map((count, index) => {
        return <Bar height={oneUnitHeight * count} isOn={isOn(limit.min, limit.max)(index)}></Bar>;
      })}
    </FlexLayout>
  );
};

export default Bars;
