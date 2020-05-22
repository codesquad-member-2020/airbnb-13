import React from 'react';
import Card from '../components/Cards/Card/Card';
import CardLayout from '../components/Cards/Card/CardLayout/CardLayout';
import Cards from '../components/Cards/Cards';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'emotion-theming';
import theme from '../style/theme';

export default {
  title: 'components|Cards',
  component: Card
};

export const cards = () => {
  return (
    <ThemeProvider theme={theme}>
      <Cards />
    </ThemeProvider>
  );
};
