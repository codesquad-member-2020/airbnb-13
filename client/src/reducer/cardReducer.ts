import { CardProp } from '@Cards/Card/Card';
import {
  SET_NEW_CARD_SET,
  SET_NEXT_CARD_SET,
  SET_START_CARD_SET,
  CardAction,
  setNextCardSet,
  setNewCardSet,
  GET_NEXT_CARD_SET
} from '@Action/cardAction';

export type CardState = {
  cardSet: number;
  cards: CardProp[];
};

const initialState = {
  cardSet: 2,
  cards: []
};

const cardReducer = (state: CardState = initialState, action: CardAction) => {
  switch (action.type) {
    case SET_NEXT_CARD_SET:
      const { cards } = action as ReturnType<typeof setNextCardSet>;
      return {
        ...state,
        cards: [...state.cards, ...cards]
      };
    case SET_NEW_CARD_SET: {
      const { cards } = action as ReturnType<typeof setNewCardSet>;
      return {
        cardSet: 1,
        cards
      };
    }
    case SET_START_CARD_SET: {
      return {
        ...state
      };
    }
    case GET_NEXT_CARD_SET: {
      return {
        ...state,
        cardSet: state.cardSet + 1
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default cardReducer;
