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
    // const tempQuotes = [
    //   {
    //     id: 1,
    //     text: "Who looks outside, dreams; who looks inside, awakens",
    //     author: "Carl Jung",
    //     user: {
    //       profile_image: 'https://cloud.githubusercontent.com/assets/204420/25317997/0acd2d94-284b-11e7-863e-79681639157a.jpg'
    //     }
    //   },
    //   {
    //     id: 2,
    //     text: "You miss 100% of the shots you don't take",
    //     author: "Michael Scott",
    //     user: {
    //       profile_image: 'https://cloud.githubusercontent.com/assets/204420/25317997/0acd2d94-284b-11e7-863e-79681639157a.jpg'
    //     }
    //   },
    //   {
    //     id: 3,
    //     text: "I can resist everything except temptation",
    //     author: "Oscar Wilde",
    //     user: {
    //       profile_image: 'https://cloud.githubusercontent.com/assets/204420/25317997/0acd2d94-284b-11e7-863e-79681639157a.jpg'
    //     }
    //   }
    // ];

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
