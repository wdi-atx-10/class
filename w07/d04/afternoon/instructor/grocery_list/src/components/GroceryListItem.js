import React, { Component } from 'react';


// <img className="item-img" src="imgurl" alt="item image"/>

class GroceryListItem extends Component {
  render(){
    return(
      <li className="list-group-item clearfix">
         <span className="item-name">{this.props.description}</span>
         <span className="buttons">
           <i onClick={ e => this.props.removeItem(this.props.keyParam) } className="fa fa-trash-o" aria-hidden="true"></i>
         </span>
       </li>
    )
  }
}

export default GroceryListItem;
