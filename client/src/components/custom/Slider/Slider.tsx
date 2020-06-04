/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import PriceInput from './PriceInput/PriceInput';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Bars from './Bars/Bars';
import useSliderValue from '$Util/customHooks/useSliderValue';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';
import theme from '@/style/theme';

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
  setMin: Dispatch<SetStateAction<number>>;
  setMax: Dispatch<SetStateAction<number>>;
};

const Slider = ({ min, max, setMin, setMax }: SliderRange) => {
  const { priceGap, minPrice, maxPrice, price } = useSelector((state: RootState) => state.priceReducer);
  const [leftValue, setLeftValue] = useSliderValue({
    value: minPrice,
    percent: 0
  });
  const [rightValue, setRightValue] = useSliderValue({
    value: maxPrice,
    percent: 100
  });

  useEffect(() => {
    setLeftValue(minPrice, maxPrice)(minPrice);
    setRightValue(minPrice, maxPrice)(maxPrice);
  }, [minPrice, maxPrice]);

  const leftInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Math.min(parseInt(e.currentTarget.value), rightValue.value);
    setLeftValue(minPrice, maxPrice)(value);
    setMin(leftValue.value);
  };

  const rightInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = Math.max(parseInt(e.currentTarget.value), leftValue.value);
    setRightValue(minPrice, maxPrice)(value);
    setMax(rightValue.value);
  };

  return (
    <FlexLayout direction="column" align="left">
      <Bars barData={price} maxHeight={40} limit={{ min: leftValue.percent, max: rightValue.percent }} />
      <Middle>
        <div className="multi-range-slider">
          <input
            type="range"
            id="input-left"
            onChange={leftInputHandler}
            min={minPrice}
            max={maxPrice}
            value={leftValue.value}
          />
          <input
            type="range"
            id="input-right"
            onChange={rightInputHandler}
            min={minPrice}
            max={maxPrice}
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
        <PriceInput price={leftValue} setPrice={setLeftValue(minPrice, maxPrice)} title={'최저 요금'} />
        <span>~</span>
        <PriceInput price={rightValue} setPrice={setRightValue(minPrice, maxPrice)} title={'최고 요금'} />
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
    margin: 0;
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
  height: 3px;
  > .track {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: ${theme.colors.lightGray};
  }

  > .range {
    position: absolute;
    z-index: 2;
    left: ${(props: SliderWrapProp) => `${props.leftPercent}%`};
    right: ${(props: SliderWrapProp) => `${100 - props.rightPercent}%`};
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: ${theme.colors.gray};
  }
  > .thumb {
    position: absolute;
    z-index: 3;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 50%;

    &.left {
      left: ${(props: SliderWrapProp) => `${props.leftPercent}%`};
      transform: translate(-7px, -8.5px);
    }
    &.right {
      right: ${(props: SliderWrapProp) => `${100 - props.rightPercent}%`};
      transform: translate(7px, -8.5px);
    }
  }
`;

const inputWrapStyle = css`
  margin-top: 2rem;
`;
