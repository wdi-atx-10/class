import React, { Component } from 'react';

class Meme extends Component {
  render() {
    return (
      <img src={ this.props.image } />
    )
  }
}

export default Meme;
