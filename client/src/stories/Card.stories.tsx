import React from 'react';
import Card from '../components/Card/Card';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Card',
  component: Card,
  decorators: [withKnobs]
};

export const card = () => {
  return <Card></Card>;
};
