import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import CardLayout from './Card/CardLayout/CardLayout';
import Card, { CardProp } from './Card/Card';
import useFetch from '$Util/customHooks/useFetch';
import { setStartCardSet } from '@Action/cardAction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@Reducer/index';
import { getNextCardSet } from '@Action/cardAction';

const Cards = () => {
  //const [cards, setCards] = useState<CardProp[]>([]);
  //useFetch<CardProp[]>(setCards, 'http://13.124.68.34/api/rooms?page=1');
  const { cards } = useSelector((state: RootState) => state.cardReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStartCardSet());
  }, []);

  const viewport = useRef(null);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const setRefTarget = (a: HTMLDivElement | null) => {
    setTarget(a);
  };
  const options = {
    root: null,
    threshold: 0.5,
    rootMargin: '-100px -50px'
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.unobserve(entry.target);
        dispatch(getNextCardSet());
      });
    };

    const io = new IntersectionObserver(handleIntersection, options);

    if (target) {
      io.observe(target);
    }
    return () => io.disconnect();
  }, [target]);

  return (
    <CardLayout gap={'5%'} width={'100%'} top={'5rem'} refCardLayout={viewport}>
      {(cards as CardProp[]).map((card, index) => {
        const lastElement = index === cards.length - 1;
        return (
          <Card
            key={card.thumbnail}
            thumbnail={card.thumbnail}
            superHost={card.superHost}
            location={card.location}
            title={card.title}
            reviewScore={card.reviewScore}
            discountPrice={card.discountPrice}
            totalPrice={card.totalPrice}
            price={card.price}
            id={card.id}
            refCard={lastElement ? setRefTarget : null}
          />
        );
      })}
    </CardLayout>
  );
};

export default Cards;
