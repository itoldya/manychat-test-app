import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CommentList from './components/CommentList';


const items = [{
  id: '1',
  user: 'one',
  text: 'first comment',
  comments: [{
    id: '1.1',
    user: 'one',
    text: 'first child',
  }, {
    id: '1.2',
    user: 'two',
    text: 'second child',
    comments: [{
      id: '1.2.1',
      user: 'one',
      text: 'fooo',
    }],
  }],
}, {
  id: '2',
  user: 'one',
  text: 'second comment',
  comments: [],
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!</h2>
        </div>
        <div className="comments-wrap">
          <CommentList items={items} currentUserId="one" createCommentAfterId={'1.2'} showForm />
        </div>
      </div>
    );
  }
}

export default App;
