import React, { Component } from 'react';
import './AddUser.css';

class AddUser extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Age" />
          <button>Save</button>
        </form>
      </div>
    )
  }
}

export default AddUser;
