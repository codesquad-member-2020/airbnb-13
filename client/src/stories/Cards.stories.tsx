import React from 'react';
import Card from '../components/Card/Card';
import CardLayout from '../components/Card/CardLayout/CardLayout';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Cards',
  component: Card
};

export const cards = () => {
  return (
    <CardLayout gap={'5%'} width={'100%'} top={'5rem'}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </CardLayout>
  );
};
