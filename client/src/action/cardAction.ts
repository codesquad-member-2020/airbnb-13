import { CardProp } from '@Cards/Card/Card';
export const SET_NEW_CARD_SET = 'SET_NEW_CARD_SET';
export const SET_NEXT_CARD_SET = 'SET_NEXT_CARD_SET';
export const SET_START_CARD_SET = 'SET_START_CARD_SET';

export const setNextCardSet = (cards: CardProp[]) => {
  return {
    type: SET_NEXT_CARD_SET,
    cards
  };
};

export const setNewCardSet = (cards: CardProp[]) => {
  return {
    type: SET_NEW_CARD_SET,
    cards
  };
};

export const setStartCardSet = () => {
  return {
    type: SET_START_CARD_SET
  };
};

export type CardAction =
  | ReturnType<typeof setNewCardSet>
  | ReturnType<typeof setNextCardSet>
  | ReturnType<typeof setStartCardSet>;
