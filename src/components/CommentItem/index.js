import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import {branch} from 'baobab-react/higher-order';
import Comment from './Comment';
import actions from './../../actions';

class CommentItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    maxDeep: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,

    onDelete: PropTypes.func.isRequired,

    currentUser: PropTypes.object.isRequired,
    replyPosition: PropTypes.string,

  };

  remove() {
    const {path} = this.props;
    this.props.dispatch(
      actions.removeComment,
      {path}
    );
  }

  reply() {
    const {item} = this.props;
    this.props.dispatch(
      actions.reply,
      {item}
    );
  }

  createComment(text) {
    const {path} = this.props;

    this.props.dispatch(
      actions.createComment,
      {text, path}
    );
  }

  render() {
    const {item, path} = this.props;
    const {maxDeep, level} = this.props;
    const {currentUser, replyPosition} = this.props;

    const replyable = level < maxDeep;
    const deletable = currentUser.id === item.author.id;

    const showForm = replyPosition === item.id;

    return (
      <Comment
        item={item}

        isLoading={item._isCreating || item._isRemoving}
        replyable={replyable}
        deletable={deletable}
        onReply={this.reply.bind(this)}
        onDelete={this.remove.bind(this)}
        onCreate={this.createComment.bind(this)}

        level={level}
        path={path}
        maxDeep={maxDeep}
        showForm={showForm}
      />
    );
  }
}

// Using a function so that your cursors' path can use the component's props etc.
export default branch((props, context) => {
  return {
    item: props.path,
    currentUser: ['currentUser'],
    replyPosition: ['replyPosition'],
  };
}, CommentItem);
