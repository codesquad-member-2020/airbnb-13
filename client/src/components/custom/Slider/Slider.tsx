import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import PriceInput from './PriceInput/PriceInput';
import FlexLayout from '../FlexLayout/FlexLayout';

type SliderWrapProp = {
  leftPercent: number;
  rightPercent: number;
};

const Slider = () => {
  const [leftValue, setLeftValue] = useState({
    value: 25,
    percent: 25
  });
  const [rightValue, setRightValue] = useState({
    value: 75,
    percent: 75
  });
  const [range, setRange] = useState({ min: 0, max: 100 });

  const calculatePercent = (min: number, max: number) => (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const leftInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Math.min(parseInt(e.currentTarget.value), rightValue.value);
    const percent = calculatePercent(range.min, range.max)(value);
    setLeftValue({ ...leftValue, value, percent });
  };

  const rightInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Math.max(parseInt(e.currentTarget.value), leftValue.value);
    const percent = calculatePercent(range.min, range.max)(value);
    setRightValue({ ...rightValue, value, percent });
  };
  return (
    <FlexLayout direction="column" align="left">
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
        <PriceInput
          value={leftValue}
          setValue={setLeftValue}
          calculatePercent={calculatePercent(range.min, range.max)}
          title={'최저 요금'}
        />
        <span>~</span>
        <PriceInput
          value={rightValue}
          setValue={setRightValue}
          calculatePercent={calculatePercent(range.min, range.max)}
          title={'최고 요금'}
        />
      </FlexLayout>
    </FlexLayout>
  );
};

export default Slider;

const Middle = styled.div`
  position: relative;
  width: 50%;
  max-width: 500px;
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
  margin: 0 15px;
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
    width: 30px;
    height: 30px;
    background-color: #6200ee;
    border-radius: 50%;
    opacity: 0.3;

    &.left {
      left: ${(props: SliderWrapProp) => `${props.leftPercent}%`};
      transform: translate(-15px, -10px);
    }
    &.right {
      right: ${(props: SliderWrapProp) => `${100 - props.rightPercent}%`};
      transform: translate(15px, -10px);
    }
  }
`;
