import React, { Component, PropTypes } from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';


class CommentList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    showForm: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
    maxDeep: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,

    currentUserId: PropTypes.string.isRequired,
    createCommentAfterId: PropTypes.string.isRequired,
  };

  static defaultProps = {
    items: [],
    showForm: false,
    maxDeep: 3,
    level: 1,
  };

  state = {
    value: '',
  };

  setValue(event) {
    const {value} = event.target;
    this.setState({value});
  }

  create() {
    const {onCreate} = this.props;
    const {value} = this.state;
    onCreate(value);
  }

  render() {
    const {items, showForm} = this.props;
    const {onCreate} = this.props;
    const {maxDeep, level} = this.props;
    const {currentUserId, createCommentAfterId} = this.props;

    const children = items.map((item) => {
      return (
        <CommentItem item={item} level={level} maxDeep={maxDeep} currentUserId={currentUserId} createCommentAfterId={createCommentAfterId} />
      )
    });

    return (
      <div className="comment-list">
        {children}
        {showForm && <CommentForm onCreate={onCreate} />}
      </div>
    );
  }
}

export default CommentList;
