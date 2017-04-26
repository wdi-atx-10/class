import React, { Component } from 'react';
import AddTodo from './containers/AddTodo';
import Todos from './containers/Todos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <AddTodo />
        </div>
        <div className="row">
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
