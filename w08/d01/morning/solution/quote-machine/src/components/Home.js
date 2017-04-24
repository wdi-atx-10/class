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
            <section className="col-md-4 col-sm-12 add-quote">Log in to add a quote</section>
        }
        <Quotes />
      </div>
    );
  }
}

export default Home;
