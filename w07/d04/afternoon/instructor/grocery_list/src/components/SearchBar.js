import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      search: ""
    }
  }

  addItem(e){
    e.preventDefault();
    this.props.addItem(this.state.search);
    this.setState({
      search: ''
    })
  }


  render(){
    return(
      <form onSubmit={ this.addItem.bind(this) } className="grocery-search">
        <input
          className="grocery-input"
          onChange={ e => this.setState({search: e.target.value}) }
          value={this.state.search}
          type="text"
          name="query"
          placeholder="Add a grocery Item" />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default SearchBar;
