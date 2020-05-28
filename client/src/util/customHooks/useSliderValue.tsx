import { useState } from 'react';
import { SliderValue } from '@Custom/Slider/Slider';

const useSliderValue = ({ value, percent }: SliderValue) => {
  const [sliderValue, setSliderValue] = useState<SliderValue>({ value, percent });

  const setPercentByValue = (min: number, max: number) => (newValue: number) => {
    const newPercent = ((newValue - min) / (max - min)) * 100;
    setSliderValue({ value: newValue, percent: newPercent });
  };

  return [sliderValue, setPercentByValue] as const;
};

export default useSliderValue;
