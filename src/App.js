import React, { Component } from 'react';

import Settings from './components/SettingsWrap/index';
import CommentsComponent from './components/CommentsComponentWrap/index';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Settings />
        <CommentsComponent />
      </div>
    );
  }
}

export default App;
