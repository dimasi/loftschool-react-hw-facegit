import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from './AppRouter';

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
      ).toHaveLength(1);
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
  });

  describe('Редиректы', () => {
    it('Должен присутствовать редирект на /user/dimasi', () => {
      expect(
        wrapper.findWhere(
          el => {
            const matchComponentName = el.name() === 'Redirect';
            const matchPropTo = el.props().to === '/user/dimasi';

            return matchComponentName && matchPropTo;
          }
        )
      ).toHaveLength(1);
    });
  });
});
