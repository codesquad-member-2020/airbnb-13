import { call, put, takeEvery, select } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN, SET_USER } from '@Action/userAction';

function* fetchUserData() {
  yield takeEvery(LOGIN, requestUserLogin);
}

const send = () => {
  return axios.get(process.env.LOGIN_API!);
};

function* requestUserLogin() {
  const res = yield call(send);
  const token = res.headers;
  yield put({ type: SET_USER, token: token });
}

export default fetchUserData;
