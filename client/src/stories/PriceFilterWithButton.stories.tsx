import React, { useState } from 'react';
import PriceFilterWithButton from '@Filters/PriceFilter/PriceFilterWithButton/PriceFilterWithButton';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|PriceFilterWithButton',
  component: PriceFilterWithButton
};

export const priceFilterWithButton = () => {
  const [focus, setFocus] = useState({ price: false, guest: false });
  const setRefTarget = (a: HTMLDivElement | null) => {};
  return (
    <ThemeProvider theme={theme}>
      <PriceFilterWithButton focus={focus} setFocus={setFocus} setRefTarget={setRefTarget} />
    </ThemeProvider>
  );
};
