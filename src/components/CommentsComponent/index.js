import React, { Component, PropTypes } from 'react';
import CommentList from './../CommentList/index';
import CommentForm from './../CommentForm/index';
import Preloader from './../Preloader/index';
import './style.css';


class CommentsComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isReady: PropTypes.bool.isRequired,
    maxDepth: PropTypes.number.isRequired,
  };


  render() {
    const {items, maxDepth, isReady, onCreate} = this.props;

    if (!isReady) {
      return (
        <div className="comments-component">
          <div className="comments-component__preloader">
            <Preloader />
          </div>
        </div>
      )
    }

    return (
      <div className="comments-component">
        <CommentList
          items={items}
          maxDepth={maxDepth}/>

        {!items.length && (<div className="comments-component__empty">No comments to display</div>)}

        <h2 className="comments-component__header">Leave Comment:</h2>
        <CommentForm onCreate={onCreate} />
      </div>
    );
  }
}

export default CommentsComponent
