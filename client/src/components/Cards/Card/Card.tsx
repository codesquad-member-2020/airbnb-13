import React from 'react';
import CardImg, { CardImgProp } from './CardImg/CardImg';
import CardDetail, { CardDetailProp } from './CardDetail/CardDetail';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';

export type CardProp = CardDetailProp & CardImgProp;

const Card = ({ superHost, location, title, price, reviewScore, thumbnail, discountPrice, totalPrice }: CardProp) => {
  return (
    <FlexLayout direction="column" align="left" gap={'1rem'} width={'30%'}>
      <CardImg thumbnail={thumbnail} />
      <CardDetail
        superHost={superHost}
        location={location}
        title={title}
        reviewScore={reviewScore}
        discountPrice={discountPrice}
        totalPrice={totalPrice}
        price={price}
      />
    </FlexLayout>
  );
};

export default Card;
