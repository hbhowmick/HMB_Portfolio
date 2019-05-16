import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to='/home'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/resume'>Resume</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://heathercormier.weebly.com/gis-portfolio.html">Portfolio</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
