import React, { Component } from 'react';
import './App.css';

class JokeContainer extends Component {
  constructor(){
    super();
    this.state = {
      jokes: ["Q: What happens to a frog's car when it breaks down? A: It gets toad away.", "Q: What did the duk say when he bought lipstick? A: Put it on my bill.", "Q: How do you count cows? A: With a cowculator."]
    }
  }
  render(){
    return(
      <div>
        <JokeList jokes={this.state.jokes} />
      </div>
    );
  }
}

class JokeList extends Component {
  render(){
    return(
      <div>
        { this.props.jokes.map((jokeString, i) => <Joke key={i} text={jokeString} /> ) }
      </div>
    )
  }
}


class Joke extends Component {
  render(){
    return (
      <div>
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}


export default JokeContainer;
