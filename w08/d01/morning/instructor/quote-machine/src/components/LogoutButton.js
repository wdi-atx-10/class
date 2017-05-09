import React, { Component } from 'react';

class LogoutButton extends Component {
  render() {
    return (
      <a onClick={ this.props.handleLogout } href="#">{ this.props.children }</a>
    )
  }
}

export default LogoutButton;
