import React, {Component} from 'react';

/*
{
  id: Date.now(),
  name: this.user.displayName,
  msg: msg,
  pic: this.user.photoURL,
  email: this.user.email
}
*/

class Growl extends Component {
  render(){
    return(
      <li>
        <h3>{this.props.name}</h3>
        <p>
        <img src={this.props.pic}/>
        </p>
        <p>{this.props.msg}</p>
        <p>{this.props.email}</p>
      </li>
    )
  }
}


export default Growl;
