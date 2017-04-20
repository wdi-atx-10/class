import React, { Component } from 'react';


class GroceryListItem extends Component {
  render(){
    return(
      <li className="list-group-item clearfix">
         <img className="item-img" src={this.props.url} alt="item image"/>
         <span className="item-name">{this.props.description}</span>
         <span className="buttons">
           <i onClick={ e => this.props.removeItem(this.props.keyParam) } className="fa fa-trash-o" aria-hidden="true"></i>
         </span>
       </li>
    )
  }
}

export default GroceryListItem;
