import { createActions } from 'redux-actions';

const actionCreators = createActions(
  {
    FETCH: {
      USER: {
        REQUEST: undefined,
        SUCCESS: undefined,
        FAILURE: undefined
      }
    }
  },
  { namespace: '_' }
);

export const fetchUserRequest = actionCreators.fetch.user.request;
export const fetchUserSuccess = actionCreators.fetch.user.success;
export const fetchUserFailure = actionCreators.fetch.user.failure;
