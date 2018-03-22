import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import PrivateRoute from './../PrivateRoute';
import UserPage from './../UserPage';
import AuthPage from './../AuthPage';
import { logout } from './../../actions/auth';
import { getIsAuthorized } from './../../reducers/auth';
import { getNetworkError } from './../../reducers/network';

import './AppRouter.css';

export class AppRouter extends Component {
  handleLogoutBtnClick = () => {
    const {logout} = this.props;

    logout();
  }

  renderLogoutBtn = () => {
    const {isAuthorized} = this.props;

    if (isAuthorized) {
      return (
        <button type="button" className="App__logout" onClick={this.handleLogoutBtnClick}>Выйти</button>
      )
    }
  }

  renderNetworkError = () => {
    const {networkError} = this.props;

    if (networkError) {
      return <p className="App__network-error-msg">{networkError}</p>
    }
  }

  render() {
    return (
      <div className='App'>
        {this.renderLogoutBtn()}
        {this.renderNetworkError()}
        <Switch>
          <PrivateRoute path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:name" component={UserPage} />
          <Route path="/login" component={AuthPage} />
          <Redirect to="/user/me" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  networkError: getNetworkError(state)
});

const mapDispatchToProps = {
  logout
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
