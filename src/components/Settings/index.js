import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import './style.css';
import Users from '../../constants/Users';


class Settings extends Component {
  static propTypes = {
    maxDepth: PropTypes.number.isRequired,
    onChangeMaxDepth: PropTypes.func.isRequired,

    currentUser: PropTypes.number.isRequired,
    onChangeCurrentUser: PropTypes.func.isRequired,
  };

  setMaxDepth(event) {
    const {onChangeMaxDepth} = this.props;
    const value = parseInt(event.target.value, 10);
    onChangeMaxDepth(value);
  }

  setCurrentUser(event) {
    const {onChangeCurrentUser} = this.props;
    const id = event.target.value;
    const user = Users[id];
    onChangeCurrentUser(user);
  }

  render() {
    const {maxDepth, currentUser} = this.props;

    const options = _.keys(Users).map((key) => (
      <option key={key} value={Users[key].id}>{Users[key].name}</option>
    ));

    return (
      <div className="settings">
        <div className="settings__param">
          <label className="settings__param-label" htmlFor="settings-currentUser">currentUser:</label>
          <select id="settings-currentUser" onChange={this.setCurrentUser.bind(this)} value={currentUser.id}>
            {options}
          </select>
        </div>

        <div className="settings__param">
          <label className="settings__param-label" htmlFor="settings-maxDepth">maxDepth:</label>
          <input id="settings-maxDepth" type="number" value={maxDepth} onChange={this.setMaxDepth.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default Settings
