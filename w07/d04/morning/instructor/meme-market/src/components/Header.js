import React, { Component } from 'react';
import AddMeme from './AddMeme';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-md-4">
            <h1>Meme Market</h1>
          </div>

          <AddMeme />
        </div>
      </header>
    );
  }
}

export default Header;
