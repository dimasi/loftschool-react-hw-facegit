import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { setToken, authorize } from './../actions/auth';

const token = handleActions(
  {
    [setToken]: (state, action) => action.payload
  },
  null
);

const isAuthorized = handleActions(
  {
    [authorize]: (state, action) => true
  },
  false
);

export default combineReducers({
  token
});

export const getToken = state => state.auth.token;
export const getIsAuthorized = state => isAuthorized;
