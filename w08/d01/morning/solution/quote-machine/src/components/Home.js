import React, { Component } from 'react';

import AddQuote from './AddQuote';
import Quotes from './Quotes';

class Home extends Component {
  render() {
    return (
      <div className="row">
        {
          (this.props.currentUser) ?
            <AddQuote { ...this.props } /> :
            <div>Log in to add a quote</div>
        }
        <Quotes />
      </div>
    );
  }
}

export default Home;
