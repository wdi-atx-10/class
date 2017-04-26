import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import UsersContainer from '../containers/UsersContainer';
import UserDetailsContainer from '../containers/UserDetailsContainer';

class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <Router>
          <div className="App">
            <Link to="/"><h1>React Redux Router Starter</h1></Link>

            <Route exact path="/" component={ UsersContainer } />
            <Route path="/:userId" component={ UserDetailsContainer } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
