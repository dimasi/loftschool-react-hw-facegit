import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFollowersRequest } from './../../actions/followers';
import { Link } from 'react-router-dom';
import Loader from './../Loader';
import Follower from './../Follower';

import './Followers.css';

export class Followers extends PureComponent {
  componentDidMount() {
    const { login, fetchFollowersRequest } = this.props;

    fetchFollowersRequest(login);
  }

  renderFollowers = () => {
    const { isFetching, ids: followers } = this.props;

    if (isFetching) {
      return <Loader />;
    } else {
      return followers.map(follower => {
        const { id, login, avatar_url } = follower;

        return (
          <Follower
            key={id}
            login={login}
            avatar_url={avatar_url}
          />
        );
      });
    }
  };

  renderFollower = follower => {
    const { id: key, login, avatar_url } = follower;
    const linkTo = `/user/${login}`;

    return (
      <div
        className="Followers__follower"
        key={key}
      >
        <Link
          to={linkTo}
          className="Followers__follower-link"
        >
          <span className="Followers__follower-avatar-container">
            <img
              src={avatar_url}
              alt=""
              className="Followers__follower-avatar"
            />
          </span>
          <span className="Followers__follower-login">{login}</span>
        </Link>
      </div>
    );
  };

  render() {
    return (
      <section className="Followers">
        <h4 className="App__heading">
          <span className="App__heading-text">Followers</span>
        </h4>
        <div className="Followers__grid">
          {this.renderFollowers()}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { isFetching, ids } = state.followers;

  return {
    isFetching,
    ids
  }
};

const mapDispatchToProps = {
  fetchFollowersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
