import network from "./network";
import {
  clearNetworkErrors,
  networkError
} from "./../actions/network";

describe("Редьюсер user", () => {
  const networkErrorActionPayload = {
    response: {
      data: {
        message: 'test'
      }
    }
  }

  it('Экшен с типом clearNetworkErrors изменяет значение error на null', () => {
    const next = network(
      { 
        error: '123' 
      }, 
      { 
        type: clearNetworkErrors 
      }
    );

    expect(next.error).toBeNull();
  });

  it('Экшен с типом networkError устанавливает новые данные для error', () => {
    const next = network(
      { 
        error: null
      }, 
      { 
        type: networkError,
        payload: networkErrorActionPayload
      }
    );

    expect(next.error).toBe(networkErrorActionPayload);
  });

  it('Экшен с типом clearNetworkErrors изменяет значение message на null', 
  () => {
    const next = network(
      { 
        message: '123'
      }, 
      { 
        type: clearNetworkErrors 
      }
    );

    expect(next.message).toBeNull();
  });

  it('Экшен с типом networkError устанавливает новые данные для message', 
  () => {
    const next = network(
      { 
        error: null
      }, 
      { 
        type: networkError,
        payload: networkErrorActionPayload
      }
    );

    expect(next.error).toBe(networkErrorActionPayload);
  });

});
