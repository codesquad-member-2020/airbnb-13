import React from 'react';
import CardImg from './CardImg/CardImg';
import CardDetail from './CardDetail/CardDetail';
import FlexLayout from '../custom/FlexLayout/FlexLayout';

const Card = () => {
  return (
    <FlexLayout direction="column" align="left" gap={'1rem'} width={'30%'}>
      <CardImg />
      <CardDetail />
    </FlexLayout>
  );
};

export default Card;
