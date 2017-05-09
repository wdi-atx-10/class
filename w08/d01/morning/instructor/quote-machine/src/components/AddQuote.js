import React, { Component } from 'react';

import './AddQuote.css';

import { database } from '../utils/firebase';

class AddQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: ''
    }

    this.ref = database.ref('/quotes');
  }

  componentWillUnmount() {
    this.ref.off();
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('Form submitted', 'quote: ', this.state.quote, 'author: ', this.state.author);
    this.ref.push({
      author: this.state.author,
      text: this.state.quote,
      user: {
        photoURL: this.props.currentUser.photoURL,
        displayName: this.props.currentUser.displayName,
        uid: this.props.currentUser.uid
      },
      '.priority': 0 - Date.now()
    });

    this.setState({
      author: '',
      quote: ''
    })
  }

  addQuoteForm() {
    if (this.props.currentUser) {
      return (
        <form
          onSubmit={ this.handleSubmit.bind(this) }
          className="form-add-quote">
          <div className="row">
            <textarea
              className="form-control"
              value={ this.state.quote }
              onChange={ e => this.setState({ quote: e.target.value }) }
              rows="3"
              placeholder="Life changing quote"></textarea>
          </div>
          <div className="row">
            <input
              className="form-control"
              onChange={ e => this.setState({ author: e.target.value })}
              value={ this.state.author }
              type="text"
              placeholder="Author" />
          </div>
          <div className="row">
            <button className="btn btn-primary">Add Quote</button>
          </div>
        </form>
      )
    } else {
      return <p>Log in to add a quote</p>;
    }
  }

  render() {
    return (
      <section className="col-md-4 col-sm-12 add-quote">
        { this.addQuoteForm() }
      </section>
    );
  }
}

export default AddQuote;
