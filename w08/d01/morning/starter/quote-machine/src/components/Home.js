import React, { Component } from 'react';

import AddQuote from './AddQuote';
import Quotes from './Quotes';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <AddQuote />
        <Quotes />
      </div>
    );
  }
}

export default Home;
