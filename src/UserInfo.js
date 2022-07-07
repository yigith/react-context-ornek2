import React, { Component } from 'react';
import AppContext from './AppContext';

class UserInfo extends Component {
  
  render() {
    return (
      <div>Merhaba {this.context.userName}</div>
    );
  }
}

UserInfo.contextType = AppContext;

export default UserInfo;