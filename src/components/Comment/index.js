import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import moment from 'moment';
import CommentList from './../CommentList/index';
import './style.css';

class Comment extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    path: PropTypes.array.isRequired,

    maxDepth: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    isLastChild: PropTypes.bool.isRequired,

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
    const {isLastChild} = this.props;

    const nextLevel = level + 1;

    const className = cn('comment', {
      loading: isCreating || isRemoving,
    });

    return (
      <div className={className}>
        {!isLastChild && <div className="comment__vertical-line"></div>}
        <div className="comment__avatar">
          <img className="comment__avatar-img" src={item.author.pic} alt={item.author.name}/>
        </div>
        <div className="comment__body">
          <header className="comment__header">
            <span className="comment__author">{item.author.name}</span>
            <span className="comment__bullet">•</span>
            <span className="comment__created" title={moment(item.created).format('LLLL')}>
              {moment(item.created).fromNow()}
              </span>
          </header>
          <div className="comment__text">{item.text}</div>
          <footer className="comment__footer">
            {canReplay && <a className="comment__footer-link" onClick={onReply}>Reply</a>}
            {(canRemove && canReplay) && <span className="comment__bullet">•</span>}
            {canRemove && <a className="comment__footer-link" onClick={onRemove}>Remove</a>}
          </footer>

          <div className="comment__children">
            <CommentList
              items={item.comments}
              path={path}
              level={nextLevel}
              maxDepth={maxDepth}
              canCreate={canCreate}
              onCreate={onCreate} />
          </div>
        </div>
      </div>
    );
  }
}

export default Comment
