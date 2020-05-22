import React from 'react';
import Card from '../components/Cards/Card/Card';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'emotion-theming';
import theme from '../style/theme';

export default {
  title: 'components|Card',
  component: Card,
  decorators: [withKnobs]
};

export const card = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card></Card>
    </ThemeProvider>
  );
};
