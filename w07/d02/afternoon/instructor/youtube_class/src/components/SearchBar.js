import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    }
  }

  searchYoutube(e){
    this.setState({ input: e.target.value });
    this.props.search(this.state.input);
  }

  render(){
    return (
      <div className="search-bar">
        <h1>React YT Search</h1>
        <input
          onChange={ this.searchYoutube.bind(this) }
          placeholder="Search youtube.."
          value={this.state.input} />
      </div>
    )
  }
}

export default SearchBar;
