import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from './AppRouter';
import PrivateRoute from './../PrivateRoute';

describe('Компонент AppRouter', () => {
  const wrapper = shallow(<AppRouter />);

  describe('Рендер', () => {
    it('Содержит компонент <Switch/>', () => {
      expect(wrapper.find('Switch')).toHaveLength(1);
    });

    it('Содержит компонент <PrivateRoute path="/user/:name" />', () => {
      expect(
        wrapper.findWhere(
          el => {
            const matchComponentName = el.name() === 'Connect(PrivateRoute)';
            const matchPropPath = el.props().path === '/user/:name';

            return matchComponentName && matchPropPath;
          }
        )
      ).toHaveLength(100);
    });

    it('Содержит компонент <Route path="/login" />', () => {
      expect(
        wrapper.findWhere(
          el => {
            const matchComponentName = el.name() === 'Route';
            const matchPropPath = el.props().path === '/login';

            return matchComponentName && matchPropPath;
          }
        )
      ).toHaveLength(1);
    });

    it('Содержит кнопку .App__logout при props.isAuthorized===true', () => {
      wrapper.setProps({isAuthorized: true});
      wrapper.update();
      expect(wrapper.find('.App__logout')).toHaveLength(1);
    });

    it('Содержит сообщение об ошибке (.App__network-error-msg) при передаче ' +
    'ошибки через props.networkError', () => {
      wrapper.setProps({
        isAuthorized: false,
        networkError: 'test'
      });
      wrapper.update();
      expect(wrapper.find('.App__network-error-msg')).toHaveLength(1);
    });
  });

  describe('Редиректы', () => {
    it('Должен присутствовать редирект на /user/me', () => {
      expect(
        wrapper.findWhere(
          el => {
            const matchComponentName = el.name() === 'Redirect';
            const matchPropTo = el.props().to === '/user/me';

            return matchComponentName && matchPropTo;
          }
        )
      ).toHaveLength(1);
    });

    it('Присутствует компонент PrivateRoute с path="/user/me", расположенный ' +
    'выше компонента PrivateRoute с path="/user/:name"', () => {
      let pathUserMe = {
        isset: false,
        index: -1
      };

      let pathUserName = {
        isset: false,
        index: -1
      };

      wrapper.find(PrivateRoute).forEach((el, index)=> {
        if (el.prop('path') === '/user/me') {
          pathUserMe.isset = true;
          pathUserMe.index = index;
        }

        if (el.prop('path') === '/user/:name') {
          pathUserName.isset = true;
          pathUserName.index = index;
        }
      });

      expect(pathUserMe.isset).toBeTruthy();
      expect(pathUserName.isset).toBeTruthy();
      expect(pathUserMe.index).toBeLessThan(pathUserName.index);
    });
  });
});
