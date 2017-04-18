import React, { Component } from 'react';
import './App.css';

class JokeContainer extends Component {
  constructor(){
    super();
    this.state = {
      jokes: ["Q: What happens to a frog's car when it breaks down? A: It gets toad away.", "Q: What did the duk say when he bought lipstick? A: Put it on my bill.", "Q: How do you count cows? A: With a cowculator."]
    }
    this._addJoke = this._addJoke.bind(this);
  }
  _addJoke(newJoke){
    let currentJokes = this.state.jokes;
    currentJokes.push(newJoke);
    this.setState({jokes: currentJokes});
  }

  render(){
    return(
      <div>
        <JokeForm addJoke={ this._addJoke }/>
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
  constructor(){
    super();
    this.state = {
      upvotes: 0
    }
  }
  _upvote(){
    let currentVotes = this.state.upvotes;
    this.setState({ upvotes: currentVotes + 1 });
  }
  _downvote(){
    let currentVotes = this.state.upvotes;
    if (currentVotes > 0){
      this.setState({upvotes: currentVotes - 1})
    }
  }

  render(){
    return (
      <div>
        <h3>{this.props.text}</h3>
        <Upvoter upvote={ this._upvote.bind(this)} />
        <Downvoter downvote={ this._downvote.bind(this)}/>
        <p>{this.state.upvotes}</p>
      </div>
    );
  }
}

class Upvoter extends Component{
  _handleClick(){
    this.props.upvote();
  }

  render(){
    return(
      <i className="fa fa-thumbs-o-up" onClick={ this._handleClick.bind(this) } > </i>
    );
  }
}

class Downvoter extends Component{
  _handleClick(){
    this.props.downvote();
  }

  render(){
    return(
      <i className="fa fa-thumbs-o-down" onClick={ this._handleClick.bind(this) }> </i>
    );
  }
}


export default JokeContainer;
