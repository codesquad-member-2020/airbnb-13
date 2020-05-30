import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SET_DATE_FILTER, SET_GUEST_FILTER, SET_PRICE_FILTER } from '@Action/filterAction';
import { SET_NEW_CARD_SET, SET_START_CARD_SET, SET_NEXT_CARD_SET } from '@Action/cardAction';
import { CardProp } from '@Cards/Card/Card';
import axios from 'axios';

function* fetchCardData() {
  yield takeEvery([SET_DATE_FILTER, SET_GUEST_FILTER, SET_PRICE_FILTER], requestNewCard);
  yield takeEvery(SET_START_CARD_SET, requestFirstCard);
}

type FilterProp = {
  adult: number;
  child: number;
  baby: number;
  startDate: string;
  endDate: string;
  startPrice: number;
  endPrice: number;
};

const send = ({ adult, child, baby, startDate, endDate, startPrice, endPrice }: FilterProp) => {
  return axios.get(
    process.env.FILTER_CARD_API! +
      `&adults=${adult}&children=${child}&infants=${baby}&checkin=${startDate}&checkout=${endDate}&minimum-price=10&maximum-price=100`
  );
};

const sendFirstCardRequest = () => {
  return axios.get(process.env.FILTER_CARD_API!);
};

function* requestNewCard() {
  const state = yield select(reducer => reducer.filterReducer);
  const res = yield call(send, state);
  const data = res.data as CardProp[];
  yield put({ type: SET_NEW_CARD_SET, cards: data });
}

function* requestFirstCard() {
  const { data } = yield call(sendFirstCardRequest);
  yield put({ type: SET_NEW_CARD_SET, cards: data });
}

export default fetchCardData;
