import React, {Component} from 'react';
import GroceryItem from './GroceryItem';

class GroceryList extends Component {
  render(){
    const groceryItems = this.props.items.map((item)=>{
      console.log(item);
      return (<GroceryItem key={item.key}
      description={item.description}
      keyParam={item.key}
      removeItem={this.props.removeItem}
      imageUrl={item.imageUrl} />)
    })

    return (
      <ul className="list-group grocery-list">
        {groceryItems}
      </ul>
    )
  }
}

export default GroceryList;
