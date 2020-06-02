/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import PriceFilterWithButton from './PriceFilter/PriceFilterWithButton/PriceFilterWithButton';
import GuestFilterWithButton from './GuestFilter/GuestFilterWithButton/GuestFilterWithButton';
import DateFilter from './DateFilter/DateFilter';

const Filters = () => {
  return (
    <FlexLayout direction={'row'} align={'left'} gap={'10px'}>
      <DateFilter />
      <GuestFilterWithButton />
      <PriceFilterWithButton />
    </FlexLayout>
  );
};

export default Filters;
