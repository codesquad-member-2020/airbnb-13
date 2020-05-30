import { CardProp } from '@Cards/Card/Card';
import {
  SET_NEW_CARD_SET,
  SET_NEXT_CARD_SET,
  SET_START_CARD_SET,
  CardAction,
  setNextCardSet,
  setNewCardSet
} from '@Action/cardAction';

type CardState = {
  cardSet: number;
  cards: CardProp[];
};

const initialState = {
  cardSet: 1,
  cards: []
};

const cardReducer = (state: CardState = initialState, action: CardAction) => {
  switch (action.type) {
    case SET_NEXT_CARD_SET:
      const { cards } = action as ReturnType<typeof setNextCardSet>;
      return {
        cardSet: state.cardSet + 1,
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
    default:
      return {
        ...state
      };
  }
};

export default cardReducer;
