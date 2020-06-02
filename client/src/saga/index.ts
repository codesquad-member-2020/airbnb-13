import { all, fork } from 'redux-saga/effects';
import fetchCardData from './fetchCardData';

const rootSaga = function* root() {
  yield all([fork(fetchCardData)]);
};

export default rootSaga;
