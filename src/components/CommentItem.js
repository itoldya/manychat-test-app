import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList';

class CommentItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    maxDeep: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,

    onDelete: PropTypes.func.isRequired,

    currentUserId: PropTypes.string.isRequired,
    createCommentAfterId: PropTypes.string.isRequired,

  };

  render() {
    const {item} = this.props;
    const {maxDeep, level} = this.props;
    const {currentUserId, createCommentAfterId} = this.props;

    const replyable = level < maxDeep;
    const deletable = currentUserId === item.user;

    const showForm = createCommentAfterId === item.id;
    //
    // if (item.text === 'fooo') {
    //   console.log(this.props)
    // }

    return (
      <div className="comment-item">
        <strong>{item.user}</strong>: {item.text} {replyable && <a href="#">reply</a>} {deletable && <a href="#">delete</a>}
        <CommentList level={level + 1} maxDeep={maxDeep} items={item.comments} showForm={showForm} currentUserId={currentUserId} createCommentAfterId={createCommentAfterId} />
      </div>
    );
  }
}

export default CommentItem;
