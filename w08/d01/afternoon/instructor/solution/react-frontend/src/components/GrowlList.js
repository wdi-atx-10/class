import React, {Component} from 'react';
import Growl from './Growl';
/*
{
  name: user.displayName,
  email: user.email,
  pic: user.photoURL,
  msg: msg
}
*/
class GrowlList extends Component {
  render(){
    const growls = this.props.growls.map(growl => {
      return(
        <Growl key={growl.id} name={growl.name} email={growl.email} pic={growl.pic} msg={growl.msg}/>
      )
    });
    return(
      <div className="row">
        <div className="growl-container">
          <ul className="class-growls">
          {growls}
          </ul>
        </div>
      </div>
    )
  }
}

export default GrowlList;
