import React, { useState } from 'react';
import CardLayout from './Card/CardLayout/CardLayout';
import Card, { CardProp } from './Card/Card';
import useFetch from '../../util/customHooks/useFetch';

const Cards = () => {
  const [cards, setCards] = useState<CardProp[]>([]);
  useFetch(setCards, 'http://3.34.159.241/api/rooms');
  return (
    <CardLayout gap={'5%'} width={'100%'} top={'5rem'}>
      {cards.map(card => (
        <Card
          key={card.thumbnail}
          thumbnail={card.thumbnail}
          superHost={card.superHost}
          location={card.location}
          title={card.title}
          reviewScore={card.reviewScore}
          totalPrice={card.totalPrice}
          price={card.price}
        />
      ))}
    </CardLayout>
  );
};

export default Cards;
