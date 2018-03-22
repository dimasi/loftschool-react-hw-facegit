import {
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './../actions/followers';
import { call, put } from 'redux-saga/effects';
import { fetchFollowersSaga } from './followers';
import { getUserFollowers } from './../api';

describe('Saga followers:', () => {
  it('call getUserFollowers', () => {
    const action = { payload: 'test_login' };
    const saga = fetchFollowersSaga(action);
    
    expect(saga.next().value).toEqual(call(getUserFollowers, 'test_login'));
  });

  it('dispatch action fetchFollowersSuccess from call on success call', () => {
    const action = { payload: 'test_login' };
    const login = 'test';
    const saga = fetchFollowersSaga(action);
    saga.next();

    expect(saga.next(login).value).toEqual(put(fetchFollowersSuccess(login)));
  });

  it('dispatch action fetchFollowersFailure from call on failure call', () => {
    const action = { payload: 'test_login' };
    const error = new Error('test error');
    const saga = fetchFollowersSaga(action);
    saga.next();
    
    expect(saga.throw(error).value).toEqual(put(fetchFollowersFailure(error)));
  });
});
