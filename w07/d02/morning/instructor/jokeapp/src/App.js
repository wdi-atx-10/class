import React, { Component } from 'react';
import './App.css';


class JokeList extends Component {
  render(){
    return(
      <div>
        <Joke text="joke1"/>
        <Joke text="joke 2"/>
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


export default JokeList;
