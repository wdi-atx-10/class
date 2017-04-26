import React, { Component } from 'react';
import './App.css';

import UsersContainer from '../containers/UsersContainer';
import UserDetailsContainer from '../containers/UserDetailsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Redux Starter</h1>

        <UsersContainer />
        <UserDetailsContainer />
      </div>
    );
  }
}

export default App;
