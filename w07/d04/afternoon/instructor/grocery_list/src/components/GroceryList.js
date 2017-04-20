import React, { Component } from 'react';
import GroceryListItem from './GroceryListItem';

class GroceryList extends Component {
  render(){

    const items = this.props.items.map(item => {
      return (
        <GroceryListItem
          key={item.key}
          keyParam={item.key}
          description={item.description}
          url={item.imageUrl}
          removeItem={this.props.removeItem}/>
      )
    })

    return(
      <ul className="list-group grocery-list">
       { items }
      </ul>
    )
  }
}

export default GroceryList;
