import React, {Component} from 'react';
import Growl from './Growl';

/*
{
  id: Date.now(),
  name: this.user.displayName,
  msg: msg,
  pic: this.user.photoURL,
  email: this.user.email
}
*/

class GrowlList extends Component {
  render(){

    const growls = this.props.growls.map(growl => {
      return(
        <Growl key={growl.id} {...growl} />
      )
    });

    return(
      <ul className="class-growls">
        { growls }
      </ul>
    )
  }
}


export default GrowlList;
