import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import { NavLink } from 'react-router-dom';


class Timeline extends Component {
  render() {
    return (
        <div className="main-timeline">
          <div className="timeline">
            <a href="" className="timeline-content">
              <div className="timeline-year">2018</div>

              <div className="timeline-icon">
                <i className="fa fa-rocket"></i>
              </div>

              <div className="content">
                <h3 className="title">
                Web Development
                </h3>

                <p className="description">
                lorem
                </p>
              </div>
            </a>
          </div>

          <div className="timeline">
            <a href="" className="timeline-content">
              <div className="timeline-year">2018</div>

              <div className="timeline-icon">
                <i className="fa fa-rocket"></i>
              </div>

              <div className="content">
                <h3 className="title">
                Web Development
                </h3>

                <p className="description">
                lorem
                </p>
              </div>
            </a>
          </div>
        </div>
    );
  }
}

export default Timeline;
