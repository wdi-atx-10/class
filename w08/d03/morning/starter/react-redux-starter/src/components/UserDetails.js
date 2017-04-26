import React, { Component } from 'react';
import './UserDetails.css';

class UserDetails extends Component {
  render() {
    if (!this.props.user) {
      return <div>Select a user</div>;
    }

    return (
      <div>
        <h2>{ this.props.user.first } { this.props.user.last }</h2>
        <h3>Age: { this.props.user.age }</h3>
      </div>
    )
  }
}

export default UserDetails;
