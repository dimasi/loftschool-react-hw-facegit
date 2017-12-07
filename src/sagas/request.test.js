import requestFlow from './request';
import {call, put, select} from 'redux-saga/effects';
import {clearNetworkErrors, networkError} from '../actions/network';
import {logout} from '../actions/auth';
import {getIsNetworkErrorPresent} from '../reducers/network';
import {getUserInformation} from '../api';

describe.skip('Сага authFlow', () => {
  const login = 'dimasi';
  const saga = requestFlow(getUserInformation, login);

  describe('Ветка без ошибок', () => {
    it('1. Эффект call getUserInformation', () => {
      expect(saga.next(login).value).toEqual(call(getUserInformation, login));
    });

    it('2. Эффект select getIsNetworkErrorPresent', () => {
      expect(saga.next().value).toEqual(select(getIsNetworkErrorPresent));
    });

    it('3. Эффект put clearNetworkErrors', () => {
      expect(saga.next().value).toEqual(put(clearNetworkErrors()));
    });
  });

  describe.skip('Ветка с ошибками', () => {
    it('1. Эффект call getUserInformation', () => {
      const error = new Error('test error');
      expect(saga.throw(error).value).toEqual(call(getUserInformation, login));
    });
  });
});
