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
      <Card
        thumbnail={
          'https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70'
        }
        superHost={true}
        location={'seoul'}
        title={'High-End Studio! ~ In the heart of Seoul'}
        reviewScore={3.7}
        totalPrice={70000}
        price={90000}></Card>
    </ThemeProvider>
  );
};
