import { CardProp } from '@Cards/Card/Card';
import {
  SET_NEW_CARD_PAGE,
  SET_NEXT_CARD_PAGE,
  SET_START_CARD_PAGE,
  CardAction,
  setNextCardPage,
  setNewCardPage,
  GET_NEXT_CARD_PAGE
} from '@Action/cardAction';

export type CardState = {
  cardPage: number;
  cards: CardProp[];
};

const initialState = {
  cardPage: 2,
  cards: []
};

const cardReducer = (state: CardState = initialState, action: CardAction) => {
  switch (action.type) {
    case SET_NEXT_CARD_PAGE:
      const { cards } = action as ReturnType<typeof setNextCardPage>;
      return {
        ...state,
        cards: [...state.cards, ...cards]
      };
    case SET_NEW_CARD_PAGE: {
      const { cards } = action as ReturnType<typeof setNewCardPage>;
      return {
        cardPage: 1,
        cards
      };
    }
    case SET_START_CARD_PAGE: {
      return state;
    }
    case GET_NEXT_CARD_PAGE: {
      return {
        ...state,
        cardPage: state.cardPage + 1
      };
    }
    default:
      return state;
  }
};

export default cardReducer;
