import React, { Component } from 'react';

class LogoutButton extends Component {
  render() {
    return (
      <a href="#"
        onClick={ this.props.logoutButtonClicked }>{ this.props.children }</a>
    )
  }
}

export default LogoutButton;
