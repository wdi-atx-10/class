import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, IndexLink } from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="header">
          <li><IndexLink to="/" activeClassName="active" className="navlink">Home</IndexLink></li>
          <li><Link to="/contact" activeClassName="active" className="navlink">Contact</Link></li>
          <li><Link to="/stuff" activeClassName="active" className="navlink">Stuff</Link></li>
          <li><Link to="/resume" activeClassName="active" className="navlink">Resume</Link></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
