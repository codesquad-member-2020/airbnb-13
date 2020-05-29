import React from 'react';
import PriceFilterWithButton from '@/components/Filters/PriceFilter/PriceFilterWithButton/PriceFilterWithButton';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|PriceFilterWithButton',
  component: PriceFilterWithButton
};

export const priceFilterWithButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <PriceFilterWithButton />
    </ThemeProvider>
  );
};
