import React, { Component, PropTypes } from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem/index';


class CommentList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    showForm: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
    maxDeep: PropTypes.number.isRequired,
    level: PropTypes.number.isRequired,
    path: PropTypes.array.isRequired,
  };

  static defaultProps = {
    items: [],
    showForm: false,
    maxDeep: 3,
    level: 1,
    path: [],
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

    const children = items.map((item, index) => {
      return (
        <CommentItem path={[...this.props.path, 'comments', index]} level={level} maxDeep={maxDeep} />
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
