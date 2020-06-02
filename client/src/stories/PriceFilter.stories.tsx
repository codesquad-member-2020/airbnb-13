import React from 'react';
import PriceFilter from '@Filters/PriceFilter/PriceFilter';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|PriceFilter',
  component: PriceFilter
};

export const priceFilter = () => {
  return (
    <ThemeProvider theme={theme}>
      <PriceFilter />
    </ThemeProvider>
  );
};
