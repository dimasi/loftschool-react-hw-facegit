import React, { PureComponent } from 'react';

import './Loader.css';

class Loader extends PureComponent {
  render() {
    return (
      <div className="Loader">
        <div className="Loader__spinner">
          <div className="Loader__animation" />
        </div>
      </div>
    );
  }
}

export default Loader;
