import { takeLatest, put, call } from 'redux-saga/effects';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './../actions/users';
import { getUserInformation, getTokenOwner } from '../api';
import requestFlow from './request';

export function* fetchUserSaga(action) {
  try {
    let response;
    if (fetchTokenOwnerRequest.toString() === action.type) {
      response = yield call(requestFlow, getTokenOwner, action.payload);
    } else {
      response = yield call(requestFlow, getUserInformation, action.payload);
    }
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest([fetchUserRequest, fetchTokenOwnerRequest], fetchUserSaga);
}
