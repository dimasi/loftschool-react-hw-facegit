import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './../actions/followers';
import { getUserFollowers } from '../api';

export function* fetchFollowersSaga(action) {
  try {
    const data = yield call(getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(data));
  } catch (e) {
    yield put(fetchFollowersFailure(e));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersSaga);
}
