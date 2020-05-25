import React from 'react';
import Cards from '@Cards/Cards';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|Cards',
  component: Cards
};

export const cards = () => {
  return (
    <ThemeProvider theme={theme}>
      <Cards />
    </ThemeProvider>
  );
};
