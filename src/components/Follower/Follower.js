import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Follower.css';

export class Follower extends PureComponent {
  render() {
    const { login, avatar_url } = this.props;
    const linkTo = `/user/${login}`;

    return (
      <div className="Follower">
        <Link
          to={linkTo}
          className="Follower__link"
        >
          <span className="Follower__avatar-container">
            <img
              src={avatar_url}
              alt=""
              className="Follower__avatar"
            />
          </span>
          <span className="Follower__login">{login}</span>
        </Link>
      </div>
    );
  }
}

export default Follower;
