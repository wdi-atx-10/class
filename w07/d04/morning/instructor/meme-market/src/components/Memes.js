import React, { Component } from 'react';

import Meme from './Meme';

class Memes extends Component {
  render() {
    return (
      <section>
        <div className="row memes">
          <Meme imageUrl="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia2.giphy.com%2Fgifsu%2Fl3fZK9uJpvnAHpo88%2Fgiphy-caption.gif" alt="" />
          <Meme imageUrl="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia4.giphy.com%2Fgifsu%2FxTiIzPhBDXgYuUqMq4%2Fgiphy-caption.gif" alt="" />
          <Meme imageUrl="https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia1.giphy.com%2Fgifsu%2FxTiIzwTEizDaJ0dgQM%2Fgiphy-caption.gif" alt="" />
        </div>
      </section>
    );
  }
}

export default Memes;
