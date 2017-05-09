import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import Meme from './components/Meme';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
      fname: 'teafasdf',
      lname: 'asdfasdf'
    }
  }

  handleClick() {
    this.setState({
      clickCount: ++this.state.clickCount
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="App-counter">
          <h2>Click count: { this.state.clickCount }</h2>
          <button onClick={ this.handleClick.bind(this) }>Click me</button>
        </div>

        <div className="App-meme">
          <Meme image="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia2.giphy.com%2Fmedia%2FijzIs4gpIp7cA%2Fgiphy-downsized.gif" />
          <Meme image="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fmedia.tenor.co%2Fimages%2F6dfdd229ce5a5b492e44fce8f52161ca%2Fraw" />
          <Meme image="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FwMt0tq2GUez8Q%2Fgiphy.gif" />
        </div>


      </div>
    );
  }
}

export default App;
