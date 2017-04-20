import React, { Component } from 'react';
import './AddMeme.css';

class AddMeme extends Component {
  render() {
    return (
      <div className="col-md-8 add-meme">
        <form name="form-add-meme">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Add Meme URL"/>
            <span className="input-group-btn">
              <button className="btn btn-primary">Save</button>
            </span>
          </div>
        </form>
      </div>
    )
  }
}

export default AddMeme;
