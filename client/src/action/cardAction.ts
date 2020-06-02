import { CardProp } from '@Cards/Card/Card';
export const SET_NEW_CARD_PAGE = 'SET_NEW_CARD_PAGE';
export const SET_NEXT_CARD_PAGE = 'SET_NEXT_CARD_PAGE';
export const SET_START_CARD_PAGE = 'SET_START_CARD_PAGE';
export const GET_NEXT_CARD_PAGE = 'GET_NEXT_CARD_PAGE';

export const setNextCardPage = (cards: CardProp[]) => {
  return {
    type: SET_NEXT_CARD_PAGE,
    cards
  };
};

export const setNewCardPage = (cards: CardProp[]) => {
  return {
    type: SET_NEW_CARD_PAGE,
    cards
  };
};

export const setStartCardPage = () => {
  return {
    type: SET_START_CARD_PAGE
  };
};

export const getNextCardPage = () => {
  return {
    type: GET_NEXT_CARD_PAGE
  };
};

export type CardAction =
  | ReturnType<typeof setNewCardPage>
  | ReturnType<typeof setNextCardPage>
  | ReturnType<typeof setStartCardPage>
  | ReturnType<typeof getNextCardPage>;
