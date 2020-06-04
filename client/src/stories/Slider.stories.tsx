import React, { useState } from 'react';
import Slider from '@Custom/Slider/Slider';
import { useDispatch } from 'react-redux';
import { setPriceFilter } from '@Action/filterAction';

export default {
  title: 'components|Slider',
  component: Slider
};

export const slider = () => {
  const dispatch = useDispatch();
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const setFilter = (min: number, max: number) => dispatch(setPriceFilter(min, max));
  return (
    <div style={{ marginTop: '200px' }}>
      <Slider min={min} max={max} setMin={setMin} setMax={setMax} />
    </div>
  );
};
