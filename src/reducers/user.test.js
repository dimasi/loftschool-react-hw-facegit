import users from "./users";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "./../actions/users";

describe("Редьюсер user", () => {
  it('Экшен с типом fetchUserRequest изменяет значение isFetching на true', 
  () => {
    const next = users(
      { 
        isFetching: false 
      }, 
      { 
        type: fetchUserRequest 
      }
    );

    expect(next.isFetching).toBeTruthy();
  });

  it('Экшен с типом fetchUserSuccess изменяет значение isFetching на false', 
  () => {
    const next = users(
      { 
        isFetching: true, 
        data: null 
      },
      {
        type: fetchUserSuccess,
        payload: "test"
      }
    );

    expect(next.isFetching).toBeFalsy();
  });

  it('Экшен с типом fetchUserFailure изменяет значение isFetching на false', 
  () => {
    const next = users(
      { 
        isFetching: true, 
        error: null 
      },
      {
        type: fetchUserFailure,
        error: new Error()
      }
    );

    expect(next.isFetching).toBeFalsy();
  });

  it('Экшен с типом fetchUserRequest изменяет значение isFetched на false', 
  () => {
    const next = users(
      { 
        isFetched: true 
      },
      { 
        type: fetchUserRequest 
      }
    );

    expect(next.isFetched).toBeFalsy();
  });

  it('Экшен с типом fetchUserSuccess изменяет значение isFetched на true', 
  () => {
    const next = users(
      { 
        isFetched: false, 
        data: null 
      },
      {
        type: fetchUserSuccess,
        payload: "test"
      }
    );

    expect(next.isFetched).toBeTruthy();
  });

  it('Экшен с типом fetchUserFailure изменяет значение isFetched на false', 
  () => {
    const next = users(
      { 
        isFetched: true, 
        error: null 
      },
      {
        type: fetchUserFailure,
        error: new Error()
      }
    );

    expect(next.isFetched).toBeFalsy();
  });

  it('Экшен с типом fetchUserRequest очищает data', () => {
    const next = users(
      { 
        data: "test" 
      }, 
      { 
        type: fetchUserRequest 
      }
    );

    expect(next.data).toBeNull();
  });

  it('Экшен с типом fetchUserSuccess устанавливает новые данные для data', 
  () => {
    const next = users(
      { 
        isFetching: true, 
        data: null 
      },
      {
        type: fetchUserSuccess,
        payload: "test"
      }
    );

    expect(next.data).toBe("test");
  });

  it('Экшен с типом fetchUserRequest очищает error', () => {
    const next = users(
      { 
        data: "test", 
        error: new Error() 
      },
      { 
        type: fetchUserRequest 
      }
    );

    expect(next.error).toBeNull();
  });

  it('Экшен с типом fetchUserSuccess очищает error', () => {
    const next = users(
      { 
        isFetching: true, 
        data: null, 
        error: new Error() 
      },
      {
        type: fetchUserSuccess,
        payload: "test"
      }
    );

    expect(next.error).toBeNull();
  });

  it('Экшен с типом fetchUserFailure изменяет значение isFetched на false', 
  () => {
    const next = users(
      { 
        isFetched: true, 
        error: null 
      },
      {
        type: fetchUserFailure,
        error: "test"
      }
    );
    
    expect(next.error).toBe("test");
  });
});
