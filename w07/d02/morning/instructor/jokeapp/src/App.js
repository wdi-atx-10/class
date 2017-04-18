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
        <JokeForm />
        <JokeList jokes={this.state.jokes} />
      </div>
    );
  }
}

class JokeForm extends Component{
  _handleSubmit(e){
    e.preventDefault();
    let newJoke = this.refs.newJokeText.value;
    // run a new function (addJoke) by passing it to the string to add to our array of jokes in the container
    this.props.addJoke(newJoke);
    this.refs.newJokeText.value = '';
  }

  render(){
    return(
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input type="text" ref="newJokeText"/>
        <input type="submit" value="Add New Joke" />
      </form>
    )
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
