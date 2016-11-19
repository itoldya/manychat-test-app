import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import moment from 'moment';


class Time extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    interval: PropTypes.number.isRequired,
  };

  static defaultProps = {
    interval: 5000,
  };

  reload() {
    this.forceUpdate();
    this.timer();
  }

  timer() {
    this.timerId = _.delay(this.reload.bind(this), this.props.interval);
  }

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    this.timerId && clearTimeout(this.timerId);
  }

  render() {
    const {date} = this.props;
    const value = moment(date).fromNow();

    return (
      <span>{value}</span>
    );
  }
}

export default Time
