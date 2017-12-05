import followers from './followers';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './../actions/followers';

describe('Редьюсер followers', () => {
  it('Экшен с типом fetchFollowersRequest изменяет значение isFetching ' +
  'на true', () => {
    const next = followers(
      { isFetching: false },
      { type: fetchFollowersRequest }
    );

    expect(next.isFetching).toBeTruthy();
  });

  it('Экшен с типом fetchFollowersSuccess изменяет значение isFetching на ' + 
  'false', () => {
    const next = followers(
      { 
        isFetching: true, 
        ids: null 
      },
      {
        type: fetchFollowersSuccess,
        payload: 'test'
      }
    );

    expect(next.isFetching).toBeFalsy();
  });

  it('Экшен с типом fetchFollowersFailure изменяет значение isFetching на ' + 
  'false', () => {
    const next = followers(
      { 
        isFetching: true, 
        error: null 
      },
      {
        type: fetchFollowersFailure,
        error: new Error()
      }
    );

    expect(next.isFetching).toBeFalsy();
  });

  it('Экшен с типом fetchFollowersRequest изменяет значение isFetched на ' +
  'false', () => {
    const next = followers(
      { 
        isFetched: true 
      },
      { 
        type: fetchFollowersRequest 
      }
    );

    expect(next.isFetched).toBeFalsy();
  });

  it('Экшен с типом fetchUserSuccess изменяет значение isFetched на true', 
  () => {
    const next = followers(
      { 
        isFetched: false, 
        ids: null 
      },
      {
        type: fetchFollowersSuccess,
        payload: 'test'
      }
    );

    expect(next.isFetched).toBeTruthy();
  });

  it('Экшен с типом fetchFollowersFailure изменяет значение isFetched на false', 
  () => {
    const next = followers(
      { 
        isFetched: true, 
        error: null 
      },
      {
        type: fetchFollowersFailure,
        error: new Error()
      }
    );

    expect(next.isFetched).toBeFalsy();
  });

  it('Экшен с типом fetchFollowersRequest очищает ids', () => {
    const next = followers(
      {
        ids: 'test'
      }, 
      {
        type: fetchFollowersRequest
      }
    );

    expect(next.ids).toBeNull();
  });

  it('Экшен с типом fetchFollowersSuccess устанавливает новые данные для ids', 
  () => {
    const next = followers(
      { 
        isFetching: true, 
        ids: null 
      },
      {
        type: fetchFollowersSuccess,
        payload: 'test'
      }
    );

    expect(next.ids).toBe('test');
  });

  it('Экшен с типом fetchFollowersRequest очищает error', () => {
    const next = followers(
      { 
        ids: 'test', 
        error: new Error() 
      },
      { 
        type: fetchFollowersRequest 
      }
    );

    expect(next.error).toBeNull();
  });

  it('Экшен с типом fetchFollowersSuccess очищает error', () => {
    const next = followers(
      { 
        isFetching: true, 
        ids: null, 
        error: new Error() 
      },
      {
        type: fetchFollowersSuccess,
        payload: 'test'
      }
    );

    expect(next.error).toBeNull();
  });

  it('Экшен с типом fetchFollowersFailure изменяет значение isFetched на ' + 
  'false', () => {
    const next = followers(
      { 
        isFetched: true, 
        error: null 
      },
      {
        type: fetchFollowersFailure,
        error: 'test'
      }
    );
    
    expect(next.error).toBe('test');
  });
});
