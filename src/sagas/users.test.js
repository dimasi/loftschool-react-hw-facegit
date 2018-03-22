import { 
  fetchTokenOwnerRequest, 
  fetchUserSuccess, 
  fetchUserFailure } from './../actions/users';
import { call, put } from 'redux-saga/effects';
import { fetchUserSaga } from './users';
import { getUserInformation, getTokenOwner } from './../api';
import requestFlow from './request';

describe('Сага users:', () => {
  describe('Экшен владельца', () => {
    const token = 'test_token';
    const action = { type: fetchTokenOwnerRequest.toString(), payload: token }
    const user = { login: 'test', id: '1' };
    const saga = fetchUserSaga(action);

    it('1. call getTokenOwner', () => {
      expect(saga.next().value).toEqual(
        call(requestFlow, getTokenOwner, token)
      );
    });

    it('2. dispatch fetchUserSuccess', () => {
      expect(saga.next({data: user}).value).toEqual(
        put(fetchUserSuccess(user))
      );
    })
  });

  describe('Экшен пользователя', () => {
    const action = { payload: 'test_login' };
    const user = { login: 'test', id: '1' };
    const saga = fetchUserSaga(action);

    it('1. call getUserInformation', () => {
      expect(saga.next().value).toEqual(
        call(requestFlow, getUserInformation, 'test_login')
      );
    });

    it('2. dispatch fetchUserSuccess', () => {
      expect(saga.next({data: user}).value).toEqual(
        put(fetchUserSuccess(user))
      );
    })
  });

  describe('Экшен ошибки', () => {
    it('dispatch action fetchUserFailure with user from call on success call', 
    () => {
      const action = { payload: 'test_login' };
      const error = new Error('test error');
      const saga = fetchUserSaga(action);
      saga.next();
      expect(saga.throw(error).value).toEqual(put(fetchUserFailure(error)));
    });
  });
});
