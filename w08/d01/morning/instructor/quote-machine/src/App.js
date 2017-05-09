import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';

import { firebase, auth } from './utils/firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      console.log('Auth state changed', currentUser);

      if (currentUser) {
        this.setState({
          currentUser
        });
      } else {
        this.setState({
          currentUser: null
        })
      }
    });
  }

  handleLogin(e) {
    e.preventDefault();
    console.log('Log in button clicked');

    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider);
  }

  handleLogout(e) {
    e.preventDefault();
    console.log('Log out button clicked');

    auth.signOut();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            handleLogin={ this.handleLogin }
            handleLogout={ this.handleLogout }
            currentUser={ this.state.currentUser } />

          <div className="container main">
            <Route exact
              path="/"
              component={ () => <Home currentUser={ this.state.currentUser } /> } />
            <Route path="/profile" component={ Profile }/>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
