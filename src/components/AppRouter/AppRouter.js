import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PrivateRoute from './../PrivateRoute';
import UserPage from './../UserPage';
import AuthPage from './../AuthPage';

import './AppRouter.css';

export class AppRouter extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Route path="/login" component={AuthPage} />
          <Redirect to="/user/dimasi" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(AppRouter));
