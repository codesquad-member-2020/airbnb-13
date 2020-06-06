import { useState } from 'react';

const calculateHeightUnit = (maxHeight: number, barData: number[]) => {
  let maxBarData = barData[0];
  barData.forEach(element => {
    if (element > maxBarData) {
      maxBarData = element;
    }
  });
  return maxHeight / maxBarData;
};

const useDrawingBars = (bars: number[], maxHeight: number) => {
  const [barData, setBarData] = useState<number[]>(bars);
  const oneUnitHeight = calculateHeightUnit(maxHeight, barData);

  const isOn = (min: number, max: number) => (index: number) => {
    const currentPercent = index * (100 / barData.length);
    return min <= currentPercent && currentPercent <= max;
  };

  return [setBarData, oneUnitHeight, isOn] as const;
};

export default useDrawingBars;
