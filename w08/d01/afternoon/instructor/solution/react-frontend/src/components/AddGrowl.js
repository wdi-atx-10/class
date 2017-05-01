import React, {Component} from 'react';

/*
{
  name: user.displayName,
  email: user.email,
  pic: user.photoURL,
  msg: msg
}
*/

class AddGrowl extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  addGrowl(e){
    e.preventDefault();
    this.props.addGrowl(this.state.text);
    this.setState({text:''});
  }

  render(){
    return(
      <form onSubmit={e => this.addGrowl(e) } className="add-growl" action="">
        <input className="growl" name="growl" value={ this.state.text} onChange={e => this.setState({text:e.target.value}) }/>
        <button type="submit" className="btn btn-primary">Growl</button>
      </form>
    )
  }
}

export default AddGrowl;
