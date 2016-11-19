import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import {branch} from 'baobab-react/higher-order';
import actions from './../actions';

import Settings from './Settings';


class SettingsBox extends Component {
  static propTypes = {
    maxDepth: PropTypes.number.isRequired,
    currentUser: PropTypes.number.isRequired,
  };

  setMaxDepth(value) {
    this.props.dispatch(actions.setMaxDepth, value);
  }

  setCurrentUser(value) {
    this.props.dispatch(actions.setCurrentUser, value);
  }

  render() {
    const {maxDepth, currentUser} = this.props;

    return (
      <Settings
        maxDepth={maxDepth}
        currentUser={currentUser}
        onChangeMaxDepth={this.setMaxDepth.bind(this)}
        onChangeCurrentUser={this.setCurrentUser.bind(this)} />
    );
  }
}

export default branch({
  maxDepth: ['maxDepth'],
  currentUser: ['currentUser'],
}, SettingsBox);

