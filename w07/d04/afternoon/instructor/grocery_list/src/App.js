import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import GroceryList from './components/GroceryList';
import './css/App.css';
import './css/fa/css/font-awesome.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: []
    }
  }

  removeItem(key){
    const items = this.state.items;

    items.forEach((item,index) => {
      // If the key passed, is the same as the item key, delete that item
      if(key === item.key)
        items.splice(index,1)
    })

    this.setState({ items })
  }


  addItem(itemName){
    let items = this.state.items;

    items.unshift({
      description: itemName,
      key: Date.now()
    })

    this.setState({ items })

    console.log(this.state.items);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar addItem={ this.addItem.bind(this) } />
        </div>
        <div className="row">
          <GroceryList removeItem={this.removeItem.bind(this)} items={ this.state.items } />
        </div>
      </div>
    );
  }
}

export default App;
