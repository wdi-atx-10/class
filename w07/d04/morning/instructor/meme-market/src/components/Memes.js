import React, { Component } from 'react';

import Meme from './Meme';

import { database, firebaseListToArray } from '../utils/firebase';

class Memes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: []
    }
  }

  componentWillMount() {
    database.ref('/memes')
      .on('value', data => {
          const results = firebaseListToArray(data.val());
          console.log('memes', results);

          this.setState({
            memes: results
          });
        });
  }

  componentWillUnmount() {
    database.off();
  }

  render() {
    const memes = this.state.memes.map((meme) => {
      return <Meme key={ meme.id } imageUrl={ meme.imageUrl } alt="" />;
    });

    return (
      <section>
        <div className="row memes">
          { memes.reverse() }
        </div>
      </section>
    );
  }
}

export default Memes;
