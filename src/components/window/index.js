import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import { NavLink } from 'react-router-dom';


class Window extends Component {
  render() {
    return (
      <div className="col-md-5">
        <div className="project">
          <p className="announcement">Coming Soon!</p>
          <p>Please check "Portfolio" page to see project samples.</p>
        </div>
      </div>
    );
  }
}

export default Window;
