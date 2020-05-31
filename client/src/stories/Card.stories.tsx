import React from 'react';
import Card from '@Cards/Card/Card';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|Card',
  component: Card,
  decorators: [withKnobs]
};

export const defaultCard = () => {
  const superHost = boolean('superHost', false);
  const location = text('location', 'seoul');
  const title = text('title', '행복이 가득한 쉼터');
  const price = number('price', 70000);
  const reviewScore = number('reviewScore', 3.8);
  const discountPrice = number('discountPrice', 10000);
  const totalPrice = number('totalPrice', 80000);
  const thumbnail = text(
    'thumbnail',
    'https://a0.muscache.com/ac/pictures/14409893/f8e3ed8d_original.jpg?interpolation=lanczos-none&size=small&output-format=jpg&output-quality=70'
  );

  return (
    <ThemeProvider theme={theme}>
      <Card
        thumbnail={thumbnail}
        superHost={superHost}
        location={location}
        title={title}
        price={price}
        reviewScore={reviewScore}
        discountPrice={discountPrice}
        totalPrice={totalPrice}
      />
    </ThemeProvider>
  );
};

defaultCard.story = {
  name: 'Default'
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
        discountPrice={50000}
        totalPrice={70000}
        price={90000}></Card>
    </ThemeProvider>
  );
};
