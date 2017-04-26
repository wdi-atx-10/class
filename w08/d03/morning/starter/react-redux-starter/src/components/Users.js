import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  render() {
    const users = this.props.users.map(user => {
      return (
        <li
          key={ user.id }
          onClick={ () => this.props.selectUser(user) }>
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
