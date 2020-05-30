import React, { useState, useEffect } from 'react';
import CardLayout from './Card/CardLayout/CardLayout';
import Card, { CardProp } from './Card/Card';
import useFetch from '$Util/customHooks/useFetch';
import { setStartCardSet } from '@Action/cardAction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@Reducer/index';

const Cards = () => {
  //const [cards, setCards] = useState<CardProp[]>([]);
  //useFetch<CardProp[]>(setCards, 'http://13.124.68.34/api/rooms?page=1');
  const { cards } = useSelector((state: RootState) => state.cardReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStartCardSet());
  }, []);
  return (
    <CardLayout gap={'5%'} width={'100%'} top={'5rem'}>
      {(cards as CardProp[]).map(card => (
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
