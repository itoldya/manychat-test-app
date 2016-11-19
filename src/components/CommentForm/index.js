import React, { Component, PropTypes } from 'react';
import utils from './../../utils';
import './style.css';

class CommentForm extends Component {
  static propTypes = {
    onCreate: PropTypes.func.isRequired,
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

    if (utils.isBlank(value)) {
      return;
    }

    this.setState({value: ''});
    onCreate(value);
  }

  render() {
    const {value} = this.state;
    const isBlank = utils.isBlank(value);

    return (
      <form className="comment-form" onSubmit={this.create.bind(this)}>
        <textarea
          className="comment-form__textarea"
          placeholder="Join the discussion..."
          onChange={this.setValue.bind(this)}
          onKeyPress={this.keyPress.bind(this)}
          value={value}
          autoFocus/>
        <button className="comment-form__submit" type="submit" disabled={isBlank}>send</button>
      </form>
    );
  }
}

export default CommentForm;
