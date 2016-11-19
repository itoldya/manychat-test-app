import React, { Component } from 'react';

import SettingsBox from './components/SettingsBox/index';
import CommentBox from './components/CommentBox/index';


class App extends Component {
  render() {
    return (
      <div className="container">
        <SettingsBox />
        <CommentBox />
      </div>
    );
  }
}

export default App;
