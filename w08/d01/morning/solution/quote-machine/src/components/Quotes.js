import React, { Component } from 'react';

import Quote from './Quote';

class Quotes extends Component {
  render() {
    const tempQuotes = [
      {
        text: "Who looks outside, dreams; who looks inside, awakens",
        author: "Carl Jung",
        user: {
          profile_image: 'https://cloud.githubusercontent.com/assets/204420/25317997/0acd2d94-284b-11e7-863e-79681639157a.jpg'
        }
      },
      {
        text: "You miss 100% of the shots you don't take",
        author: "Michael Scott",
        user: {
          profile_image: 'https://cloud.githubusercontent.com/assets/204420/25317997/0acd2d94-284b-11e7-863e-79681639157a.jpg'
        }
      },
      {
        text: "I can resist everything except temptation",
        author: "Oscar Wilde",
        user: {
          profile_image: 'https://cloud.githubusercontent.com/assets/204420/25317997/0acd2d94-284b-11e7-863e-79681639157a.jpg'
        }
      }
    ];

    const quotes = tempQuotes.map(quote => {
      return <Quote data={ quote } />
    });

    return (
      <section className="col-md-8 col-sm-12 quotes">
        { quotes }
      </section>
    );
  }
}

export default Quotes;
