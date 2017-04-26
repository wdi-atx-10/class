import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    if (!this.props.users.length) {
      return <p>No users</p>;
    }

    const users = this.props.users.map(user => {
      return (
        <li key={ user.id }>
          { user.first } { user.last }
        </li>
      );
    });

    return (
      <ul>
        { users }
      </ul>
    );
  }
}

export default Users;
