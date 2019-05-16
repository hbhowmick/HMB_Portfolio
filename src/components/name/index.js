import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import { NavLink } from 'react-router-dom';


class Name extends Component {
  render() {
    return (
      <div className="text-align-right padding-top-lg padding-right-lg">
        <h1>Heather Bhowmick</h1>
        <FontAwesomeIcon icon="layer-group" />
        <h2 className="right-margin-md">Data</h2>
        <FontAwesomeIcon icon="map-marker-alt" />
        <h2 className="right-margin-md">Maps</h2>
        <FontAwesomeIcon icon="laptop-code" />
        <h2 className="right-margin-lg">Apps</h2>
      </div>
    );
  }
}

export default Name;
