import React, { Component, PropTypes } from 'react';
import './style.css';


class Preloader extends Component {
  render() {

    return (
      <div className="loader">
        <div className="wrap">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
          <div className="bar7"></div>
          <div className="bar8"></div>
          <div className="bar7"></div>
          <div className="bar8"></div>
          <div className="bar9"></div>
          <div className="bar10"></div>
        </div>
      </div>
    );
  }
}

export default Preloader
