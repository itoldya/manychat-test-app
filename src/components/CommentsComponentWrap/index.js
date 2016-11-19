import React, { Component, PropTypes } from 'react';
import {branch} from 'baobab-react/higher-order';
import CommentsComponent from './../CommentsComponent/index';
import actions from './../../actions';


class CommentsComponentWrap extends Component {
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

    return (
      <CommentsComponent
        items={items}
        maxDepth={maxDepth}
        isReady={isReady}
        onCreate={this.createComment.bind(this)}/>
    );
  }
}

export default branch({
  items: ['comments'],
  isReady: ['isReady'],
  maxDepth: ['maxDepth'],
}, CommentsComponentWrap);
