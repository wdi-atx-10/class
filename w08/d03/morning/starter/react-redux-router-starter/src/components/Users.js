import React, { Component } from 'react';
import './Users.css';

import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const users = this.props.users.map(user => {
      return (
        <li key={ user.id }>
          <Link to={ `/${user.id}` }>{ user.first } { user.last }</Link>
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
