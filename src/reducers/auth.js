import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { authorize, logout } from './../actions/auth';

const isAuthorized = handleActions(
  {
    [authorize]: (state, action) => true,
    [logout]: (state, action) => false
  },
  false
);

export default combineReducers({
  isAuthorized
});

export const getIsAuthorized = state => state.auth.isAuthorized;
