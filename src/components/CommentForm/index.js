import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import utils from './../../utils';
import './style.css';

class CommentForm extends Component {
  static propTypes = {
    onCreate: PropTypes.func.isRequired,
    maxLength: PropTypes.number.isRequired,
  };

  static defaultProps = {
    maxLength: 420,
  };

  state = {
    value: '',
  };

  setValue(event) {
    const {value} = event.target;
    this.setState({value});
  }

  keyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.create(event);
    }
  }

  create(event) {
    event && event.preventDefault();

    const {onCreate} = this.props;
    const {value} = this.state;

    if (!this.isValid()) {
      return;
    }

    this.setState({value: ''});
    onCreate(value);
  }

  isValid() {
    const {value} = this.state;
    const {maxLength} = this.props;

    if (utils.isBlank(value)) {
      return false;
    }

    if (value.length > maxLength) {
      return false;
    }

    return true;
  }

  render() {
    const {maxLength} = this.props;
    const {value} = this.state;
    const isValid = this.isValid();

    const charsLeft = maxLength - value.length;
    const negative = charsLeft < 0;

    return (
      <form className="comment-form" onSubmit={this.create.bind(this)}>
        <textarea
          className="comment-form__textarea"
          placeholder="Join the discussion..."
          onChange={this.setValue.bind(this)}
          onKeyPress={this.keyPress.bind(this)}
          value={value}
          autoFocus/>
        <span className={cn("comment-form__counter", {negative})}>
          {charsLeft}
        </span>
        <button className="comment-form__submit" type="submit" disabled={!isValid}>send</button>
      </form>
    );
  }
}

export default CommentForm;
