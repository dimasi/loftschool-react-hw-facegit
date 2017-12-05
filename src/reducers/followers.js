import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './../actions/followers';

const ids = handleActions(
  {
    [fetchFollowersRequest]: (state, action) => null,
    [fetchFollowersSuccess]: (state, action) =>
      action.payload.data || action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchFollowersRequest]: (state, action) => null,
    [fetchFollowersSuccess]: (state, action) => null,
    [fetchFollowersFailure]: (state, action) => action.error
  },
  null
);

const isFetching = handleActions(
  {
    [fetchFollowersRequest]: (state, action) => true,
    [fetchFollowersSuccess]: (state, action) => false,
    [fetchFollowersFailure]: (state, action) => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchFollowersRequest]: (state, action) => false,
    [fetchFollowersSuccess]: (state, action) => true,
    [fetchFollowersFailure]: (state, action) => false
  },
  false
);

export default combineReducers({
  isFetching,
  isFetched,
  ids,
  error
});
