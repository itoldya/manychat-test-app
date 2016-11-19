import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import CommentList from './../CommentList';

class Comment extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    path: PropTypes.array.isRequired,

    maxDeep: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,

    onDelete: PropTypes.func.isRequired,
    onReply: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,

    replyable: PropTypes.bool.isRequired,
    deletable: PropTypes.bool.isRequired,

    isLoading: PropTypes.bool.isRequired,

    showForm: PropTypes.bool.isRequired,

  };

  render() {
    const {item} = this.props;
    const {path} = this.props;
    const {replyable, deletable, isLoading, showForm} = this.props;
    const {maxDeep, level} = this.props;
    const {onCreate, onReply, onRemove} = this.props;

    return (
      <div className={cn('comment-item', {'in-progress': isLoading})}>
        <strong>{item.author.name}</strong>: {item.text}
        {replyable && <a onClick={onReply}>reply</a>}
        {deletable && <a onClick={onRemove}>remove</a>}
        <CommentList path={path} level={level + 1} maxDeep={maxDeep} items={item.comments} showForm={showForm} onCreate={onCreate} />
      </div>
    );
  }
}

export default Comment
