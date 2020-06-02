import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SET_DATE_FILTER, SET_GUEST_FILTER, SET_PRICE_FILTER } from '@Action/filterAction';
import { SET_NEW_CARD_SET, SET_START_CARD_SET, GET_NEXT_CARD_SET, SET_NEXT_CARD_SET } from '@Action/cardAction';
import { CardProp } from '@Cards/Card/Card';
import axios from 'axios';
import { CardState } from '@Reducer/cardReducer';

function* fetchCardData() {
  yield takeEvery([SET_DATE_FILTER, SET_GUEST_FILTER, SET_PRICE_FILTER], requestNewCard);
  yield takeEvery(SET_START_CARD_SET, requestFirstCard);
  yield takeEvery(GET_NEXT_CARD_SET, requestNextCard);
}

type FilterProp = {
  adult: number;
  child: number;
  baby: number;
  startDate: string;
  endDate: string;
  startPrice: number;
  endPrice: number;
  page: number;
};

const send = ({ adult, child, baby, startDate, endDate, startPrice, endPrice, page }: FilterProp) => {
  return axios.get(
    process.env.FILTER_CARD_API! +
      `page=${page}&adults=${adult}&children=${child}&infants=${baby}&checkin=${startDate}&checkout=${endDate}&minimum-price=${startPrice}&maximum-price=${endPrice}`
  );
};

const sendFirstCardRequest = () => {
  return axios.get(`${process.env.FILTER_CARD_API}page=1`!);
};

function* requestNewCard() {
  const state = yield select(reducer => reducer.filterReducer);
  const param = { ...state, page: 1 };
  const res = yield call(send, param);
  const data = res.data as CardProp[];
  yield put({ type: SET_NEW_CARD_SET, cards: data });
}

function* requestFirstCard() {
  const { data } = yield call(sendFirstCardRequest);
  yield put({ type: SET_NEW_CARD_SET, cards: data });
}

function* requestNextCard() {
  const state = yield select(reducer => reducer.filterReducer);
  const cardState: CardState = yield select(reducer => reducer.cardReducer);
  const cardPage = cardState.cardSet;
  const param = { ...state, page: cardPage };
  const res = yield call(send, param);
  const data = res.data as CardProp[];
  yield put({ type: SET_NEXT_CARD_SET, cards: data });
}

export default fetchCardData;
