import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchTokenOwnerRequest, fetchUserRequest } from './../../actions/users';
import Loader from './../Loader';
import Followers from './../Followers';

import './UserPage.css';

export class UserPage extends PureComponent {
  componentDidMount() {
    const {
      match: {
        params: {
          name
        }
      },
      fetchUserRequest,
      fetchTokenOwnerRequest
    } = this.props;

    if (name == null) {
      fetchTokenOwnerRequest();
    } else {
      fetchUserRequest(name);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: {
          name: curName
        }
      },
      fetchUserRequest
    } = this.props;

    const {
      match: {
        params: {
          name: nextName
        }
      }
    } = nextProps;

    if (nextName !== curName) {
      fetchUserRequest(nextName);
    }
  }

  renderContent() {
    const {
      isFetching,
      user
    } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (!user) {
      return this.renderErrorMsg();
    }

    return this.renderUser();
  }

  renderErrorMsg = () => (
    <p className="UserPage__error-msg">Пользователь не найден</p>
  );

  renderUser = () => {
    const {
      user: {
        avatar_url,
        login,
        public_repos,
        followers
      }
    } = this.props;

    return (
      <div className="UserPage__wrapper">
        <div className="UserPage__user">
          <div className="UserPage__user-avatar-container">
            <img
              src={avatar_url}
              alt=""
              className="UserPage__user-avatar"
            />
          </div>
          <div className="UserPage__user-info">
            <h4 className="UserPage__user-login">{login}</h4>
            <dl className="UserPage__user-followers-counter">
              <dt className="UserPage__user-followers-counter-title">
                Followers:
              </dt>
              <dd className="UserPage__user-followers-counter-value">
                {followers}
              </dd>
            </dl>
            <dl className="UserPage__user-public-repos-counter">
              <dt className="UserPage__user-public-repos-counter-title">
                Public repos:
              </dt>
              <dd className="UserPage__user-public-repos-counter-calue">
                {public_repos}
              </dd>
            </dl>
          </div>
        </div>
        <Followers login={login} />
      </div>
    );
  };

  render() {
    return (
      <div className="UserPage">
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    users: {
      data: user,
      isFetching
    },
  } = state;

  return {
    user,
    isFetching
  }
};

const mapDispatchToProps = {
  fetchUserRequest,
  fetchTokenOwnerRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
