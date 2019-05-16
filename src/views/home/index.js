import React, { Component } from 'react';
import './index.css';
import Name from '../../components/name';


class Home extends Component {
  render() {
    return (
      <div className="home-background">
        <div className="row">
          <div className="col-md-12">
            <Name />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
