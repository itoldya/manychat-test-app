import React, { Component, PropTypes } from 'react';
import {branch} from 'baobab-react/higher-order';
import CommentList from './CommentList';
import actions from './../actions';


class CommentBox extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  createComment(text) {
    this.props.dispatch(
      actions.createComment,
      {text, path: []}
    );
  }

  render() {
    return (
      <CommentList {...this.props} onCreate={this.createComment.bind(this)} showForm/>
    );
  }
}

export default branch({
  items: ['comments']
}, CommentBox);
