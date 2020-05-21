import React from 'react';
import Button from '../components/custom/Button/Button';
import ButtonGroup from '../components/custom/Button/ButtonGroup';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';
import Icon from '../Icon/Icon';

export default {
  title: 'components|ButtonGroup',
  component: ButtonGroup,
  decorators: [withKnobs]
};

export const buttonGroup = () => {
  const direction = radios('direction', { Row: 'row', Column: 'column' }, 'row');
  const gap = text('gap', '0.5rem');
  const align = radios('align', { right: 'right', left: 'left', spaceBetween: 'spaceBetween' }, 'left');

  return (
    <ButtonGroup direction={direction} align={align} gap={gap}>
      <Button theme={'primary'} fontSize={'small'} width="70px">
        Button
      </Button>
      <Button theme={'primary'} fontSize={'small'} width="70px">
        Button
      </Button>
    </ButtonGroup>
  );
};
