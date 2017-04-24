import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container main">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
