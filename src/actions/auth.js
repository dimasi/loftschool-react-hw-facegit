import { createAction } from 'redux-actions';

export const setToken = createAction('SET_TOKEN');
export const authorize = createAction('AUTHORIZE');
export const logout = createAction('LOGOUT');
