/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import PriceRow from './PriceRow/PriceRow';

const Prices = () => {
  return (
    <FlexLayout direction="column" align="left" customCSS={wrapperStyle} gap="5px">
      <PriceRow category={'15박'} price={123123}></PriceRow>
      <PriceRow category={'15박'} price={123123}></PriceRow>
      <PriceRow category={'15박'} price={123123}></PriceRow>
      <PriceRow category={'15박'} price={123123}></PriceRow>
      <PriceRow category={'15박'} price={123123}></PriceRow>
    </FlexLayout>
  );
};

const wrapperStyle = css({
  '> *:not(:first-of-type)': {
    borderTop: '1px solid red'
  },
  '> *:last-of-type': {
    marginBottom: '20px'
  }
});

export default Prices;
