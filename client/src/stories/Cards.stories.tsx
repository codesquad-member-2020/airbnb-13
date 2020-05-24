import React from 'react';
import Cards from '../components/Cards/Cards';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'emotion-theming';
import theme from '../style/theme';

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
