import React from 'react';
import Slider from '@Custom/Slider/Slider';
import { useDispatch } from 'react-redux';
import { setPriceFilter } from '@Action/filterAction';

export default {
  title: 'components|Slider',
  component: Slider
};

export const slider = () => {
  const dispatch = useDispatch();
  const setFilter = (min: number, max: number) => dispatch(setPriceFilter(min, max));
  return (
    <div style={{ marginTop: '200px' }}>
      <Slider min={0} max={100} setFilter={setFilter} />
    </div>
  );
};
