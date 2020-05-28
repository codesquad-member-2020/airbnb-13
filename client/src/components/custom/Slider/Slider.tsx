import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import PriceInput from './PriceInput/PriceInput';
import FlexLayout from '../FlexLayout/FlexLayout';
import Bar from './Bar/Bar';
import useSliderValue from '$Util/customHooks/useSliderValue';

type SliderWrapProp = {
  leftPercent: number;
  rightPercent: number;
};

export type SliderValue = {
  value: number;
  percent: number;
};

const BarData = [2, 1, 3, 4, 9, 9, 1, 2, 3, 4, 5, 8, 0, 17, 19, 22, 4, 6, 1, 10];

const calculateHeightUnit = (maxHeight: number, barData: number[]) => {
  let maxBarData = barData[0];
  barData.forEach(element => {
    if (element > maxBarData) {
      maxBarData = element;
    }
  });
  return maxHeight / maxBarData;
};

const Slider = () => {
  const [leftValue, setLeftValue] = useSliderValue({
    value: 25,
    percent: 25
  });
  const [rightValue, setRightValue] = useSliderValue({
    value: 75,
    percent: 75
  });

  const [range, setRange] = useState({ min: 0, max: 100 });

  const leftInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Math.min(parseInt(e.currentTarget.value), rightValue.value);
    setLeftValue(range.min, range.max)(value);
  };

  const rightInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Math.max(parseInt(e.currentTarget.value), leftValue.value);
    setRightValue(range.min, range.max)(value);
  };

  const oneUnitHeight = calculateHeightUnit(30, BarData);

  const isOnHandler = (index: number) => {
    const currentPercent = index * (100 / BarData.length);
    return leftValue.percent <= currentPercent && currentPercent <= rightValue.percent;
  };

  return (
    <FlexLayout direction="column" align="left">
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
      <Middle>
        <div className="multi-range-slider">
          <input
            type="range"
            id="input-left"
            onInput={leftInputHandler}
            min={range.min}
            max={range.max}
            value={leftValue.value}
          />
          <input
            type="range"
            id="input-right"
            onInput={rightInputHandler}
            min={range.min}
            max={range.max}
            value={rightValue.value}
          />
          <SliderWrap leftPercent={leftValue.percent} rightPercent={rightValue.percent}>
            <div className="track"></div>
            <div className="range"></div>
            <div className="thumb left"></div>
            <div className="thumb right"></div>
          </SliderWrap>
        </div>
      </Middle>
      <FlexLayout direction={'row'} align={'spaceBetween'}>
        <PriceInput price={leftValue} setPrice={setLeftValue(range.min, range.max)} title={'최저 요금'} />
        <span>~</span>
        <PriceInput price={rightValue} setPrice={setRightValue(range.min, range.max)} title={'최고 요금'} />
      </FlexLayout>
    </FlexLayout>
  );
};

export default Slider;

const Middle = styled.div`
  position: relative;
  width: 100%;
  input[type='range'] {
    position: absolute;
    pointer-events: none;
    z-index: 2;
    width: 100%;
    height: 10px;
    opacity: 0;
    &::-webkit-slider-thumb {
      pointer-events: all;
      width: 30px;
      height: 30px;
      border-radius: 0;
      border: 0 none;
      background-color: red;
      -webkit-appearance: none;
    }
  }
`;

const SliderWrap = styled.div`
  position: relative;
  z-index: 1;
  height: 10px;
  > .track {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #c6aee7;
  }

  > .range {
    position: absolute;
    z-index: 2;
    left: ${(props: SliderWrapProp) => `${props.leftPercent}%`};
    right: ${(props: SliderWrapProp) => `${100 - props.rightPercent}%`};
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #6200ee;
  }
  > .thumb {
    position: absolute;
    z-index: 3;
    width: 20px;
    height: 20px;
    background-color: #6200ee;
    border-radius: 50%;

    &.left {
      left: ${(props: SliderWrapProp) => `${props.leftPercent}%`};
      transform: translate(-7px, -5px);
    }
    &.right {
      right: ${(props: SliderWrapProp) => `${100 - props.rightPercent}%`};
      transform: translate(7px, -5px);
    }
  }
`;
