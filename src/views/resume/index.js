import React, { Component } from 'react';
import './index.css';
import Timeline from '../../components/timeline';
import Window from '../../components/window';


class Resume extends Component {
  render() {
    return (
      <div className="row">
        <Timeline />
        <Window />
      </div>
    );
  }
}

export default Resume;
