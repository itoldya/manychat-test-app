import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import CommentList from './CommentList';

class Comment extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    path: PropTypes.array.isRequired,

    maxDepth: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,

    onCreate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onReply: PropTypes.func.isRequired,

    canReplay: PropTypes.bool.isRequired,
    canRemove: PropTypes.bool.isRequired,
    canCreate: PropTypes.bool.isRequired,

    isCreating: PropTypes.bool.isRequired,
    isRemoving: PropTypes.bool.isRequired,
  };

  render() {
    const {item} = this.props;
    const {canReplay, canRemove, canCreate} = this.props;
    const {isCreating, isRemoving} = this.props;
    const {maxDepth, level, path} = this.props;
    const {onCreate, onReply, onRemove} = this.props;

    return (
      <div className={cn('comment-item', {'in-progress': isCreating || isRemoving})}>
        <strong>{item.author.name}</strong>: {item.text}
        {canReplay && <a onClick={onReply}>reply</a>}
        {canRemove && <a onClick={onRemove}>remove</a>}
        <CommentList path={path} level={level + 1} maxDepth={maxDepth} items={item.comments} canCreate={canCreate} onCreate={onCreate} />
      </div>
    );
  }
}

export default Comment
