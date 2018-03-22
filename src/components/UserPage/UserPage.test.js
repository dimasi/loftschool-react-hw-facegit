import React from 'react';
import { shallow } from 'enzyme';
import { UserPage } from './UserPage';
import Followers from './../Followers';

describe('Компонент UserPage', () => {
  const fetchUserRequest = jest.fn();

  describe('Методы', () => {
    const wrapper = shallow(
      <UserPage
        user={{}}
        match={{ 
          params: { 
            name: '' 
          } 
        }}
        fetchUserRequest={fetchUserRequest}
      />
    );

    it('Присутствует метод componentDidMount', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('Присутствует метод componentWillReceiveProps', () => {
      expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
    });
  });

  describe('Рендер', () => {
    it('Присутствует аватар (.UserPage__user-avatar)', () => {
      const wrapper = shallow(
        <UserPage
          user={{}}
          match={{ 
            params: { 
              name: '' 
            } 
          }}
          fetchUserRequest={fetchUserRequest}
        />
      );

      expect(wrapper.find('.UserPage__user-avatar')).toHaveLength(1);
    });

    it('Присутствует логин (.UserPage__user-login)', () => {
      const wrapper = shallow(
        <UserPage
          user={{}}
          match={{ 
            params: { 
              name: '' 
            } 
          }}
          fetchUserRequest={fetchUserRequest}
        />
      );

      expect(wrapper.find('.UserPage__user-login')).toHaveLength(1);
    });

    it('Присутствует блок с количеством фаловеров пользователя ' +
    '(.UserPage__user-followers-counter)', () => {
      const wrapper = shallow(
        <UserPage
          user={{}}
          match={{ 
            params: { 
              name: '' 
            } 
          }}
          fetchUserRequest={fetchUserRequest}
        />
      );

      expect(wrapper.find('.UserPage__user-followers-counter')).toHaveLength(1);
    });

    it('Присутствует компонент Followers с передачей логина через ' +
    'props', () => {
      const wrapper = shallow(
        <UserPage
          user={{ 
            login: 'test' 
          }}
          match={{ 
            params: { 
              name: '' 
            } 
          }}
          fetchUserRequest={fetchUserRequest}
        />
      );
      const followers = wrapper.find(Followers);

      expect(followers).toHaveLength(1);
      expect(followers.props().login).toBe('test');
    });

    it('Присутствует компонент Loader, при isFetching === true', () => {
      const wrapper = shallow(
        <UserPage
          isFetching={true}
          user={{}}
          match={{ 
            params: { 
              name: '' 
            } 
          }}
          fetchUserRequest={fetchUserRequest}
        />
      );

      expect(wrapper.find('Loader')).toHaveLength(1);
    });

    it('Присутствует сообщение о том, что пользователь не найден, при ' +
    'isFetching === false && user === null', () => {
      const wrapper = shallow(
        <UserPage
          isFetching={false}
          user={null}
          match={{ 
            params: { 
              name: '' 
            } 
          }}
          fetchUserRequest={fetchUserRequest}
        />
      );

      expect(wrapper.find('.UserPage__error-msg')).toHaveLength(1);
    });
  });
});
