import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import moment from 'moment';
import Time from './../Time/index';
import CommentList from './../CommentList/index';
import Truncate from './../Truncate/index';
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

  reply(event) {
    event.preventDefault();
    this.props.onReply();
  }

  remove(event) {
    event.preventDefault();
    this.props.onRemove();
  }

  render() {
    const {item} = this.props;
    const {canReplay, canRemove, canCreate} = this.props;
    const {isCreating, isRemoving} = this.props;
    const {maxDepth, level, path} = this.props;
    const {onCreate} = this.props;
    const {isLastChild} = this.props;

    const nextLevel = level + 1;

    const className = cn('comment', {
      loading: isCreating || isRemoving,
    });

    return (
      <div className={className}>
        <a name={item.id} />
        {!isLastChild && <div className="comment__vertical-line"></div>}
        <div className="comment__avatar">
          <img className="comment__avatar-img" src={item.author.pic} alt={item.author.name}/>
        </div>
        <div className="comment__body">
          <header className="comment__header">
            <span className="comment__author">{item.author.name}</span>
            <span className="comment__bullet">•</span>
            <a href={`#${item.id}`} className="comment__created" title={moment(item.created).format('LLLL')}>
              <Time date={item.created} />
            </a>
          </header>
          <div className="comment__text">
            <Truncate text={item.text}/>
          </div>
          <footer className="comment__footer">
            {canReplay && <a href="#" className="comment__footer-link" onClick={this.reply.bind(this)}>Reply</a>}
            {(canRemove && canReplay) && <span className="comment__bullet">•</span>}
            {canRemove && <a href="#" className="comment__footer-link" onClick={this.remove.bind(this)}>Remove</a>}
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
