import React, { useState } from 'react';
import PriceFilter from '@Filters/PriceFilter/PriceFilter';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|PriceFilter',
  component: PriceFilter
};

type PriceProp = {
  guest: boolean;
  price: boolean;
};
export const priceFilter = () => {
  const [focus, setFocused] = useState<PriceProp>({ guest: false, price: false });
  return (
    <ThemeProvider theme={theme}>
      <PriceFilter setFocus={setFocused} />
    </ThemeProvider>
  );
};
