import React, {Component} from 'react';


class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = {
      input: ''
    }
  }

  render(){
    return(
      <form onSubmit={ e => {
        this.props.addGrowl(e, this.state.input)
        this.setState({input: ''})
      }}
        className="add-growl" action="">
        <input onChange={ e => this.setState({input: e.target.value}) }
          value={this.state.input}
          className="growl"
          name="growl" />
        <input type="submit" value="Growl" />
      </form>
      )
  }
}


export default SearchBar;
