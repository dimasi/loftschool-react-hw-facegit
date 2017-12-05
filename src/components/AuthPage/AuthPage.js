import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setToken } from './../../actions/auth';
import { getToken } from './../../reducers/auth';

import './AuthPage.css';

class AuthPage extends PureComponent {
  state = {
    token: ''
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      const { token } = this.state;
      const { setToken } = this.props;

      setToken(token);
    }
  };

  renderRedirect = () => {
    const { token } = this.props;

    if (token) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const { token } = this.state;

    return (
      <div className="AuthPage">
        {this.renderRedirect()}
        <div className="AuthPage__text">
          <p className="App__text">Введите токен и нажмите Enter</p>
          <p className="App__text App__text_small App__text_muted">
            Токен можно получить по этой{' '}
            <a
              className="App__link"
              href="https://github.com/settings/tokens"
            >
              ссылке
            </a>
          </p>
        </div>
        <input
          className="App__textfield"
          name="token"
          value={token}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = {
  setToken
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
