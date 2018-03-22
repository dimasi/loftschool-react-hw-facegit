import requestFlow from './request';
import {call, put, select} from 'redux-saga/effects';
import {clearNetworkErrors, networkError} from '../actions/network';
import {logout} from '../actions/auth';
import {getIsNetworkErrorPresent} from '../reducers/network';
import {getUserInformation} from '../api';

describe('Сага authFlow', () => {
  const login = 'dimasi';

  describe('Ветка без ошибок', () => {
    const saga = requestFlow(getUserInformation, login);

    it('1. Эффект call getUserInformation', () => {
      expect(saga.next(login).value).toEqual(call(getUserInformation, login));
    });

    it('2. Эффект select getIsNetworkErrorPresent', () => {
      expect(saga.next().value).toEqual(select(getIsNetworkErrorPresent));
    });

    it('3. Эффект put clearNetworkErrors', () => {
      expect(saga.next(true).value).toEqual(put(clearNetworkErrors()));
    });
  });

  describe('Ветка с ошибками', () => {
    const saga = requestFlow(getUserInformation, login);

    it('1. Эффект call getUserInformation с ошибкой', () => {
      const error = new Error('test error');
      error.response = {
        status: 401
      }
      saga.next();
      expect(saga.throw(error).value).toEqual(put(networkError(error)));
    });
    
    it('2. Эффект put logout', () => {
      expect(saga.next().value).toEqual(put(logout()));
    });
  });
});
