import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './../actions/users';

const isFetching = handleActions(
  {
    [fetchUserRequest]: (state, action) => true,
    [fetchUserSuccess]: (state, action) => false,
    [fetchUserFailure]: (state, action) => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchUserRequest]: (state, action) => false,
    [fetchUserSuccess]: (state, action) => true,
    [fetchUserFailure]: (state, action) => false
  },
  false
);

const data = handleActions(
  {
    [fetchUserRequest]: (state, action) => null,
    [fetchUserSuccess]: (state, action) => 
      action.payload.data || action.payload
  },
  null
);

const error = handleActions(
  {
    [fetchUserRequest]: (state, action) => null,
    [fetchUserSuccess]: (state, action) => null,
    [fetchUserFailure]: (state, action) => action.error
  },
  null
);

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error
});
