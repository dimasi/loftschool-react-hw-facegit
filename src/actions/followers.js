import { createActions } from 'redux-actions';

const actionCreators = createActions(
  {
    FETCH: {
      FOLLOWERS: {
        REQUEST: undefined,
        SUCCESS: undefined,
        FAILURE: undefined
      }
    }
  },
  { namespace: '_' }
);

export const fetchFollowersRequest = actionCreators.fetch.followers.request;
export const fetchFollowersSuccess = actionCreators.fetch.followers.success;
export const fetchFollowersFailure = actionCreators.fetch.followers.failure;
