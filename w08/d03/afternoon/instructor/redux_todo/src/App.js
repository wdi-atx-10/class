import React, { Component } from 'react';
import AddTodo from './containers/AddTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <AddTodo />
        </div>
        <div className="row"></div>
      </div>
    );
  }
}

export default App;
