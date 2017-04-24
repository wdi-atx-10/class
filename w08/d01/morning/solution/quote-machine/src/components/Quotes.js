import React, { Component } from 'react';

import Quote from './Quote';
import { database, firebaseListToArray } from '../utils/firebase';

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: []
    }

    this.ref = database.ref('/quotes');
  }

  componentWillMount() {
    this.ref
      .on('value', data => {
        const quotes = firebaseListToArray(data.val());
        console.log('quotes', quotes);

        this.setState({
          quotes: quotes
        });
      });
  }

  componentWillUnmount() {
    this.ref.off();
  }

  render() {
    const quotes = this.state.quotes.map(quote => {
      return <Quote key={ quote.id } data={ quote } />
    });

    return (
      <section className="col-md-8 col-sm-12 quotes">
        { quotes }
      </section>
    );
  }
}

export default Quotes;
