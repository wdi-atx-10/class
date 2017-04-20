import React, { Component } from 'react';
import GroceryList from './components/GroceryList';
import SearchBar from './components/SearchBar';
import firebase from './firebase'
import axios from 'axios';
import './css/App.css';
import './css/fa/css/font-awesome.css';

class App extends Component {
  constructor(props){
    super(props)
    this.ref = firebase.database().ref();
    this.pixabayUrl = 'https://pixabay.com/api/';

    this.state = {
      title: 'Firebase Grocery List',
      items: []
    }
  }

  componentDidMount(){
    this.getDatabaseItems()
  }

  getItemImage(query,callback){
    console.log('query: ',query)
    axios.get(this.pixabayUrl,{
      params: {
        key: '5150964-f7ec518ccbab158776052cbf6',
        category: 'food',
        q: query
      }
    }).then(response => {
      callback(response);
    }).catch(error => {
      console.error(error);
      callback(false);
    })
  }

  getDatabaseItems(){
    this.ref.on('value',(snapshot)=>{
      const db = snapshot.val();
      // console.log('snapshot: ', items);

      if(db != null){
        let items = db.items;
        console.log('items: ', items)
        this.setState({ items })
      }

    });
  }

  persistItems(){
    this.ref.set({
       items: this.state.items
    });
  }

  addItem(item){
    const items = this.state.items;

    this.getItemImage(item, response => {
      if(response){
        console.log('response: ',response)
        items.unshift({
            description: item,
            key: Date.now(),
            imageUrl: response.data.hits[0].previewURL
        });
        this.setState({ items });
        this.persistItems();
      }
    })

  }

  removeItem(key){
    let items = this.state.items;

    items.forEach( (item,i) => {
      if(item.key === key)
        items.splice(i,1);
    });

    this.setState({ items });
    this.persistItems();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>{this.state.title}</h1>
          <SearchBar addItem={this.addItem.bind(this)}/>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <GroceryList items={this.state.items} removeItem={this.removeItem.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
