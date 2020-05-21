import React from 'react';
import Button from '../components/custom/Button/Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Icon from '../Icon/Icon';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Button',
  component: Button,
  decorators: [withKnobs]
};

export const primary = () => {
  return (
    <Button theme={'primary'} fontSize={'small'} width="100%" disabled={true}>
      Button
    </Button>
  );
};

export const secondary = () => {
  return (
    <Button theme={'secondary'} fontSize={'medium'} width="50px">
      Button
    </Button>
  );
};

export const nooutline = () => {
  return (
    <Button theme={'nooutline'} fontSize={'big'} width={100}>
      Button
    </Button>
  );
};

export const circle = () => {
  return (
    <Button theme={'primary'} fontSize={'big'} width={'70px'} circle={true}>
      Button
    </Button>
  );
};

export const withIcon = () => {
  return (
    <Button theme={'subtle'} width={'50px'} fontSize={'big'} circle={true}>
      <Icon icon="close" />
    </Button>
  );
};

export const withIconDisabled = () => {
  return (
    <Button theme={'subtle'} width={'50px'} fontSize={'big'} circle={true} disabled={true}>
      <Icon icon="close" />
    </Button>
  );
};

export const button = () => {
  const label = text('children', 'BUTTON');
  const fontSize = select('fontSize', ['small', 'medium', 'big'], 'medium');
  const theme = select('theme', ['primary', 'secondary', 'nooutline'], 'primary');
  const disabled = boolean('disabled', false);
  const width = text('width', '100%');
  const circle = boolean('circle', false);

  return (
    <Button fontSize={fontSize} theme={theme} disabled={disabled} width={width} circle={circle}>
      {label}
    </Button>
  );
};

button.story = {
  name: 'Default'
};
