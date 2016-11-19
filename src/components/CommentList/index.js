import React, { Component, PropTypes } from 'react';
import CommentForm from './../CommentForm/index';
import CommentItem from './../CommentItem/index';
import './style.css';


class CommentList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    maxDepth: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    path: PropTypes.array.isRequired,

    canCreate: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
  };

  static defaultProps = {
    items: [],
    canCreate: false,
    maxDepth: 3,
    level: 1,
    path: [],
  };

  render() {
    const {items} = this.props;
    const {canCreate, onCreate} = this.props;
    const {maxDepth, level, path} = this.props;

    const children = items.map((item, index) => (
      <CommentItem
        key={item.id}
        path={[...path, 'comments', index]}
        level={level}
        maxDepth={maxDepth}
        isLastChild={index === (items.length -1)}/>
    ));

    return (
      <div className="comment-list">
        <div className="comment-list__children">
          {children}
        </div>

        {canCreate && <CommentForm onCreate={onCreate} />}
      </div>
    );
  }
}

export default CommentList;
