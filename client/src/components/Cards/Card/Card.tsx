import React, { MutableRefObject } from 'react';
import CardImg, { CardImgProp } from './CardImg/CardImg';
import CardDetail, { CardDetailProp } from './CardDetail/CardDetail';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';

export type CardProp = CardDetailProp &
  CardImgProp & {
    refCard: ((instance: HTMLDivElement | null) => void) | null;
  };

const Card = ({
  superHost,
  location,
  title,
  price,
  reviewScore,
  thumbnail,
  discountPrice,
  totalPrice,
  id,
  refCard
}: CardProp) => {
  return (
    <FlexLayout direction="column" align="left" gap={'1rem'} width={'30%'} refFlexLayout={refCard}>
      <CardImg thumbnail={thumbnail} />
      <CardDetail
        superHost={superHost}
        location={location}
        title={title}
        reviewScore={reviewScore}
        discountPrice={discountPrice}
        totalPrice={totalPrice}
        price={price}
        id={id}
      />
    </FlexLayout>
  );
};

export default Card;
