import React from 'react';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'components|FlexLayout',
  component: FlexLayout,
  decorators: [withKnobs]
};

export const defaultFlexLayout = () => {
  const direction = select('direction', ['column', 'row'], 'column');
  const align = select('align', ['left', 'right', 'spaceAround', 'spaceBetween'], 'left');
  const wrap = boolean('wrap', false);
  const gap = text('gap', '');
  const width = text('width', '');

  return (
    <FlexLayout direction={direction} align={align} gap={gap} wrap={wrap} width={width}>
      <div>ari</div>
      <div>whn</div>
      <div>ari</div>
      <div>whn</div>
      <div>ari</div>
      <div>whn</div>
    </FlexLayout>
  );
};

defaultFlexLayout.story = {
  name: 'Default'
};

export const flexLayout = () => {
  return (
    <FlexLayout direction="column" align="left" gap={'20px'} width={'100px'}>
      <div>ari</div>
      <div>whn</div>
      <div>ari</div>
      <div>whn</div>
      <div>ari</div>
      <div>whn</div>
    </FlexLayout>
  );
};
