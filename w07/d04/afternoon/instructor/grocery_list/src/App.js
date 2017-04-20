import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import GroceryList from './components/GroceryList';
import firebase from './firebase';
import axios from 'axios';

import './css/App.css';
import './css/fa/css/font-awesome.css';

class App extends Component {
  constructor(props){
    super(props)

    this.ref = firebase.database().ref();
    this.pixabayUrl = 'http://pixabay.com/api/';
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    this.ref.on('value', (snapshot)=>{
      const db = snapshot.val();

      if(db !== null){
        this.setState({
          items: db.items
        })
      }
    });
  }

  getItemImage(query, callback){
    axios.get(this.pixabayUrl, {
      params: {
        key: '5150964-f7ec518ccbab158776052cbf6',
        category: 'food',
        q: query
      }
    }).then((response)=>{
      console.log(response);
      callback(response);
    }).catch((error)=>{
        console.error(error);
        callback(false);
    });
  }

  persistItems(){
    this.ref.set({
      items: this.state.items
    });
  }

  removeItem(key){
    const items = this.state.items;

    items.forEach((item,index) => {
      // If the key passed, is the same as the item key, delete that item
      if(key === item.key)
        items.splice(index,1)
    })

    this.setState({ items })

    this.persistItems();
  }


  addItem(itemName){

    this.getItemImage(itemName, (response)=>{
      let items = this.state.items;

      if(response){
        items.unshift({
          description: itemName,
          key: Date.now(),
          imageUrl: response.data.hits[0].previewURL
        })
      } else {
        items.unshift({
          description: itemName,
          key: Date.now(),
          imageUrl: '#'
        })
      }


      this.setState({ items })
      this.persistItems();
    });

  }

  render() {
    return (
      <div className="container">
      <h1>Firebase Grocery list</h1>
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
