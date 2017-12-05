import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../reducers/auth';

export class PrivateRoute extends PureComponent {
  render() {
    const {
      token,
      component: Component,
      ...rest
    } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          token ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

export default connect(state => ({
  token: getToken(state)
}))(PrivateRoute);
