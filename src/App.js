import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SettingsBox from './components/SettingsBox';
import CommentBox from './components/CommentBox';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!</h2>
        </div>
        <div className="comments-wrap">
          <SettingsBox />
          <CommentBox />
        </div>
      </div>
    );
  }
}

export default App;
