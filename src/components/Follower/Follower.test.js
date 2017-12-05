import React from 'react';
import { shallow } from 'enzyme';
import { Follower } from './Follower';

describe('Компонент Follower', () => {
  const wrapper = shallow(<Follower login="test" />);

  describe('Рендер', () => {
    it('Присутствует аватар с классом Follower__avatar', () => {
      expect(wrapper.find('.Follower__avatar')).toHaveLength(1);
    });

    it('Присутствует логин с классом Follower__login содержащим значение ' +
    'переданное через props', () => {
      const elFollowerLogin = wrapper.find('.Follower__login');
      expect(elFollowerLogin).toHaveLength(1);
      expect(elFollowerLogin.text()).toEqual('test');
    });

    it('Ссылка фалловера ведет на /user/{user.login}', () => {
      expect(wrapper.find('Link').props().to).toEqual('/user/test');
    });
  });
});
