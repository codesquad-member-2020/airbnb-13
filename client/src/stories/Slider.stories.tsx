import React from 'react';
import Slider from '@Custom/Slider/Slider';

export default {
  title: 'components|Slider',
  component: Slider
};

export const slider = () => {
  return (
    <div style={{ marginTop: '200px' }}>
      <Slider />
    </div>
  );
};
