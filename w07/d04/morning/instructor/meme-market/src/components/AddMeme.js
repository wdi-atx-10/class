import React, { Component } from 'react';
import './AddMeme.css';

import { database } from '../utils/firebase';

class AddMeme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted: ', this.state.imageUrl);

    database.ref('/memes')
      .push({
        imageUrl: this.state.imageUrl
      })
      .then(() => {
        console.log('Url saved');
        this.setState({
          imageUrl: ''
        })
      });
  }

  render() {
    return (
      <div className="col-md-8 add-meme">
        <form name="form-add-meme" onSubmit={ this.handleSubmit.bind(this) }>
          <div className="input-group">
            <input
              value={ this.state.imageUrl }
              onChange={ (e) => this.setState({ imageUrl: e.target.value }) }
              type="text"
              className="form-control"
              placeholder="Add Meme URL"/>
            <span className="input-group-btn">
              <button
                className="btn btn-primary"
                >Save</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default AddMeme;
