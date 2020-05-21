import React from 'react';
import FlexLayout from '../components/custom/FlexLayout/FlexLayout';

export default {
  title: 'components|FlexLayout',
  component: FlexLayout
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
