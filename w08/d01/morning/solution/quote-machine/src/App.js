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
    }
  }

  componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        console.log('Logged in:', currentUser);
        this.setState({ currentUser });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  loginButtonClicked(e) {
    e.preventDefault();

    const provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider);
  }

  logoutButtonClicked(e) {
    e.preventDefault();

    auth.signOut();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            currentUser={ this.state.currentUser }
            loginButtonClicked={ this.loginButtonClicked }
            logoutButtonClicked={ this.logoutButtonClicked } />

          <div className="container main">
            <Route exact path="/" component={ () => <Home currentUser={ this.state.currentUser } /> } />
            <Route path="/profile" component={ Profile }/>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
