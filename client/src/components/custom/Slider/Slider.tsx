/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useState } from 'react';
import PriceInput from './PriceInput/PriceInput';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Bars from './Bars/Bars';
import useSliderValue from '$Util/customHooks/useSliderValue';

type SliderWrapProp = {
  leftPercent: number;
  rightPercent: number;
};

export type SliderValue = {
  value: number;
  percent: number;
};

export type SliderRange = {
  min: number;
  max: number;
  setFilter: Function;
};

const BarData = [2, 1, 3, 4, 9, 9, 1, 2, 3, 4, 5, 8, 0, 17, 19, 22, 4, 6, 1, 10];

const Slider = ({ min, max, setFilter }: SliderRange) => {
  const [leftValue, setLeftValue] = useSliderValue({
    value: min,
    percent: 0
  });
  const [rightValue, setRightValue] = useSliderValue({
    value: max,
    percent: 100
  });

  const leftInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Math.min(parseInt(e.currentTarget.value), rightValue.value);
    setLeftValue(min, max)(value);
    setFilter(leftValue.value, rightValue.value);
  };

  const rightInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Math.max(parseInt(e.currentTarget.value), leftValue.value);
    setRightValue(min, max)(value);
    setFilter(leftValue.value, rightValue.value);
  };

  return (
    <FlexLayout direction="column" align="left">
      <Bars barData={BarData} maxHeight={30} limit={{ min: leftValue.percent, max: rightValue.percent }} />
      <Middle>
        <div className="multi-range-slider">
          <input type="range" id="input-left" onChange={leftInputHandler} min={min} max={max} value={leftValue.value} />
          <input
            type="range"
            id="input-right"
            onChange={rightInputHandler}
            min={min}
            max={max}
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
      <FlexLayout direction={'row'} align={'spaceBetween'} alignItemCenter={true} customCSS={inputWrapStyle}>
        <PriceInput price={leftValue} setPrice={setLeftValue(min, max)} title={'최저 요금'} />
        <span>~</span>
        <PriceInput price={rightValue} setPrice={setRightValue(min, max)} title={'최고 요금'} />
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

const inputWrapStyle = css`
  margin-top: 2rem;
`;