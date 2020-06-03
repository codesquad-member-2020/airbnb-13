import { call, put, takeEvery, select } from 'redux-saga/effects';
import { SET_DATE_FILTER, SET_GUEST_FILTER, SET_PRICE_FILTER } from '@Action/filterAction';
import { SET_NEW_CARD_PAGE, SET_START_CARD_PAGE, GET_NEXT_CARD_PAGE, SET_NEXT_CARD_PAGE } from '@Action/cardAction';
import { CardProp } from '@Cards/Card/Card';
import axios from 'axios';
import { CardState } from '@Reducer/cardReducer';

function* fetchCardData() {
  yield takeEvery([SET_DATE_FILTER, SET_GUEST_FILTER, SET_PRICE_FILTER], requestNewCard);
  yield takeEvery(SET_START_CARD_PAGE, requestFirstCard);
  yield takeEvery(GET_NEXT_CARD_PAGE, requestNextCard);
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
  const data = res.data.room as CardProp[];

  yield put({ type: SET_NEW_CARD_PAGE, cards: data });
}

function* requestFirstCard() {
  const { data } = yield call(sendFirstCardRequest);
  yield put({ type: SET_NEW_CARD_PAGE, cards: data.room });
}

function* requestNextCard() {
  const state = yield select(reducer => reducer.filterReducer);
  const cardState: CardState = yield select(reducer => reducer.cardReducer);
  const cardPage = cardState.cardPage;
  const param = { ...state, page: cardPage };
  const res = yield call(send, param);
  const data = res.data.room as CardProp[];
  yield put({ type: SET_NEXT_CARD_PAGE, cards: data });
}

export default fetchCardData;
