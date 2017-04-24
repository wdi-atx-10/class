import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div className="container main">
            <Route exact path="/" component={ Home }/>
            <Route path="/profile" component={ Profile }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
