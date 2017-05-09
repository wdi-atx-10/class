import React, { Component } from 'react';

class LoginButton extends Component {
  render() {
    return (
      <button
        onClick={ this.props.handleLogin }
        className="btn-login btn btn-primary">{ this.props.children }</button>
    )
  }
}

export default LoginButton;
