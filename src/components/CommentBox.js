import React, { Component, PropTypes } from 'react';
import {branch} from 'baobab-react/higher-order';
import CommentList from './CommentList';
import actions from './../actions';


class CommentBox extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    maxDepth: PropTypes.number.isRequired,
  };

  createComment(text) {
    const path = [];
    this.props.dispatch(actions.createComment, {text, path});
  }

  render() {
    const {items, maxDepth} = this.props;

    return (
      <CommentList
        items={items}
        maxDepth={maxDepth}
        onCreate={this.createComment.bind(this)}
        canCreate/>
    );
  }
}

export default branch({
  items: ['comments']
}, CommentBox);
