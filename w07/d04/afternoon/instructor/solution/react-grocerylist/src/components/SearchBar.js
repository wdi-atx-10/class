import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state={
      search: ""
    }
  }

  addToList(e){
    e.preventDefault();
    this.props.addItem(this.state.search);
    this.setState({search: ""});
  }

  render(){

    return (
      <form onSubmit={this.addToList.bind(this)} className="grocery-search">
        <input
          onChange={ e => this.setState({ search: e.target.value }) }
          className="grocery-input"
          type="text"
          name="query"
          placeholder="Add a grocery Item"
          value={this.state.search }/>
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default SearchBar;
