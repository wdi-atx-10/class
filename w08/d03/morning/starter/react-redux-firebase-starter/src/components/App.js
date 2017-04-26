import React, { Component } from 'react';
import './App.css';

import UsersContainer from '../containers/UsersContainer';
import AddUserContainer from '../containers/AddUserContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Redux Firebase Starter</h1>
        <AddUserContainer />

        <UsersContainer />
      </div>
    );
  }
}

export default App;
