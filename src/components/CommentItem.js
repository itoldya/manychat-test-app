import React, { Component, PropTypes } from 'react';
import {branch} from 'baobab-react/higher-order';
import Comment from './Comment';
import actions from './../actions';


class CommentItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    replyPosition: PropTypes.string,

    maxDepth: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    path: PropTypes.array.isRequired,
  };

  remove() {
    const {path} = this.props;
    this.props.dispatch(actions.removeComment, {path});
  }

  reply() {
    const {item} = this.props;
    this.props.dispatch(actions.setReplyPosition, item.id);
  }

  createComment(text) {
    const {path} = this.props;
    this.props.dispatch(actions.createComment, {text, path});
  }

  render() {
    const {item} = this.props;
    const {maxDepth, level, path} = this.props;
    const {currentUser, replyPosition} = this.props;

    const canReplay = level < maxDepth;
    const canRemove = currentUser.id === item.author.id;
    const canCreate = replyPosition === item.id;

    return (
      <Comment
        item={item}

        level={level}
        path={path}
        maxDepth={maxDepth}

        isCreating={item.isCreating}
        isRemoving={item.isRemoving}

        canReplay={canReplay}
        canRemove={canRemove}
        canCreate={canCreate}

        onReply={this.reply.bind(this)}
        onRemove={this.remove.bind(this)}
        onCreate={this.createComment.bind(this)}
      />
    );
  }
}


export default branch((props, context) => {
  return {
    item: props.path,
    currentUser: ['currentUser'],
    replyPosition: ['replyPosition'],
  };
}, CommentItem);
