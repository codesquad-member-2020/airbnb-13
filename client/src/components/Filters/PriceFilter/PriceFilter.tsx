/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, Dispatch, SetStateAction } from 'react';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Button from '@Custom/Button/Button';
import Slider from '@Custom/Slider/Slider';
import { useSelector, useDispatch } from 'react-redux';
import { setPriceFilter } from '@Action/filterAction';
import { RootState } from '@Reducer/index';
import { FilterFocus } from '@Filters/Filters';

type PriceProp = {
  setFocus: Dispatch<SetStateAction<FilterFocus>>;
};

const PriceFilter = ({ setFocus }: PriceProp) => {
  const { minPrice, maxPrice, averagePrice } = useSelector((state: RootState) => state.priceReducer);
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);
  const dispatch = useDispatch();
  const setFilter = (min: number, max: number) => dispatch(setPriceFilter(min, max));

  return (
    <div css={style}>
      <FlexLayout direction="column" align="left" gap={'1.5rem'}>
        <div>평균 1박 요금은 ${averagePrice}입니다</div>
        <Slider min={min} max={max} setMin={setMin} setMax={setMax} />
      </FlexLayout>
      <FlexLayout direction={'row'} align={'spaceBetween'} customCSS={customCSS}>
        <Button theme={'nooutline'} fontSize="medium" width={'3rem'}>
          지우기
        </Button>
        <Button
          theme={'secondary'}
          fontSize="medium"
          width={'3rem'}
          onClick={() => {
            setFilter(min, max);
            setFocus({ guest: false, price: false });
          }}>
          저장
        </Button>
      </FlexLayout>
    </div>
  );
};

const style = css`
  width: 400px;
  padding: 1.5rem 1.5rem 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  position: absolute;
  top: calc(100% + 10px);
  box-shadow: 0px 0px 10px rgba(173, 173, 173, 0.3);
`;

const customCSS = css`
  border-top: 1px solid #eeeeee;
  margin-top: 2rem;
  padding-top: 1rem;
`;

export default PriceFilter;
