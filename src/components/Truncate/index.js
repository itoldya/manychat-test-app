import React, {PropTypes, Component} from "react";
import nl2br from 'react-nl2br';


export default class Truncate extends Component {
  static propTypes = {
    className: PropTypes.string,
    maxLength: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    maxLength: 140,
    text: '',
  };

  state = {
    showMore: false,
  };

  set(showMore) {
    this.setState({showMore});
  }

  render() {
    const {className} = this.props;
    const {maxLength, text} = this.props;
    const {showMore} = this.state;

    if (text.length <= maxLength) {
      return (
        <span className={className}>{nl2br(text)}</span>
      )
    }

    if (showMore) {
      return (
        <span className={className}>
          {nl2br(text)} <a onClick={this.set.bind(this, false)}>show less</a>
        </span>
      );
    }

    const cut = text.substring(0, maxLength);

    return (
      <span className={className}>
        {cut}... <a onClick={this.set.bind(this, true)}>show more</a>
      </span>
    );
  }
}