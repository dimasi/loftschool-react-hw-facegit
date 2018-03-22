import React from 'react';
import { Followers } from './Followers';
import Follower from './../Follower';
import { shallow } from 'enzyme';

describe('Компонент Followers', () => {
  const fetchFollowersRequest = jest.fn();

  const wrapper = shallow(
    <Followers
      isFetching={false}
      login={'dimasi'}
      ids={[
        {
          id: 1,
          login: ''
        },
        {
          id: 2,
          login: ''
        }
      ]}
      fetchFollowersRequest={fetchFollowersRequest}
    />
  );

  describe('Методы', () => {
    it('Присутствует метод componentDidMount', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });
  });

  describe('Рендер', () => {
    it('Количество отрендеренных фолловеров соответствует props', () => {
      expect(wrapper.find(Follower)).toHaveLength(2);
    });

    it('Присутствует компонент Loader, при isFetching === true', () => {
      wrapper.setProps({
        ...wrapper.props(),
        isFetching: true
      });

      expect(wrapper.find('Loader')).toHaveLength(1);
    });
  });
});
