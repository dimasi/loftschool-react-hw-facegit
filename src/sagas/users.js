import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './../actions/users';
import { getUserInformation } from '../api';

export function* fetchUserSaga(action) {
  try {
    const user = yield call(getUserInformation, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFailure(e));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserRequest, fetchUserSaga);
}
