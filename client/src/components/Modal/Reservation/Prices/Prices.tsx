/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import PriceRow from './PriceRow/PriceRow';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';
import theme from '@/style/theme';

type PricesProp = {
  price: number;
  cleaningFee: number;
  serviceFee: number;
  occupancyFee: number;
  totalPrice: number;
};

const Prices = ({ price, cleaningFee, serviceFee, occupancyFee, totalPrice }: PricesProp) => {
  const { startDate, endDate } = useSelector((state: RootState) => state.filterReducer);
  const endDateMoment = moment(endDate, 'YYYY-MM-DD');
  const startDateMoment = moment(startDate, 'YYYY-MM-DD');
  const diff = moment.duration(endDateMoment.diff(startDateMoment));
  const diffDays = diff.asDays();
  return (
    <FlexLayout direction="column" align="left" customCSS={wrapperStyle} gap="5px">
      <PriceRow category={`${price} X ${diffDays}박`} price={price * diffDays}></PriceRow>
      <PriceRow category={'청소비'} price={cleaningFee}></PriceRow>
      <PriceRow category={'서비스 수수료'} price={serviceFee}></PriceRow>
      <PriceRow category={'숙박세와 수수료'} price={occupancyFee}></PriceRow>
      <PriceRow category={'합계'} price={totalPrice}></PriceRow>
    </FlexLayout>
  );
};

const wrapperStyle = css({
  color: theme.colors.darkGray,
  fontSize: '13px',
  '> *:not(:first-of-type)': {
    borderTop: `1px solid ${theme.colors.lightGray}`
  },
  '> *:last-of-type': {
    marginBottom: '20px',
    fontWeight: 'bold'
  }
});

export default Prices;
