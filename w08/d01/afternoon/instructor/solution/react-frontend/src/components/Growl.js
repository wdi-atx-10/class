import React, {Component} from 'react';

/*
{
  name: user.displayName,
  email: user.email,
  pic: user.photoURL,
  msg: msg
}
*/

class Growl extends Component {
  render(){
    const email = "mailto:"+this.props.email;

    return(
      <li>
        <h3>{this.props.name}</h3>
        <p><img src={this.props.pic}/></p>
        <p>{this.props.msg}</p>
        <p>
          <a href={email}>Email And Growl</a>
        </p>
      </li>
    )
  }
}

export default Growl;
