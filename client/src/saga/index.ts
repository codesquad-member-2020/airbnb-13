import { all, fork } from 'redux-saga/effects';
import fetchCardData from './fetchCardData';
import fetchUserData from './fetchUserData';

const rootSaga = function* root() {
  yield all([fork(fetchCardData), fork(fetchUserData)]);
};

export default rootSaga;
