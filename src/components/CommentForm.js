import React, { Component, PropTypes } from 'react';

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

  create() {
    const {onCreate} = this.props;
    const {value} = this.state;
    onCreate(value);
  }

  render() {
    const {value} = this.state;


    return (
      <div className="form">
        <textarea onChange={this.setValue.bind(this)}>{value}</textarea>
        <button onClick={this.create.bind(this)}>send</button>
      </div>
    );
  }
}

export default CommentForm;
