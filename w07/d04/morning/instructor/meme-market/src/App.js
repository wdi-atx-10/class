import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Memes from './components/Memes';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />

        <Memes />

        <Footer />
      </div>
    );
  }
}

export default App;
