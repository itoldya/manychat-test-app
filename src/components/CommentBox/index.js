import React, { Component, PropTypes } from 'react';
import {branch} from 'baobab-react/higher-order';
import CommentList from './../CommentList/index';
import CommentForm from './../CommentForm/index';
import actions from './../../actions';


class CommentBox extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isReady: PropTypes.bool.isRequired,
    maxDepth: PropTypes.number.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(actions.loadComments);
  }

  createComment(text) {
    const path = [];
    this.props.dispatch(actions.createComment, {text, path});
  }

  render() {
    const {items, maxDepth, isReady} = this.props;

    if (!isReady) {
      return <div>loading...</div>
    }

    return (
      <div>
        <CommentList
          items={items}
          maxDepth={maxDepth}/>

        <CommentForm onCreate={this.createComment.bind(this)} showHeader/>
      </div>
    );
  }
}

export default branch({
  items: ['comments'],
  isReady: ['isReady'],
  maxDepth: ['maxDepth'],
}, CommentBox);
