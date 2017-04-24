import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import GrowlList from './components/GrowlList';
import {Redirect} from 'react-router';
import firebase from './firebase';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.user = JSON.parse(localStorage.getItem('user'));
    this.state = {
      growls: [],
      loggedIn: true
    }
  }

  componentWillMount(){
    this.getGrowls();
  }

  persistGrowls(){
    firebase.database().ref().set({
      growls: this.state.growls
    });
  }

  getGrowls(){
    firebase.database().ref().on('value',snapshot => {
      const db = snapshot.val();

      if(db){
        this.setState({
          growls : db.growls.slice(0,20)
        })
      }
    });
  }

  addGrowl(e,msg){
    e.preventDefault();
    const growls = this.state.growls;

    growls.unshift({
      id: Date.now(),
      name: this.user.displayName,
      msg: msg,
      pic: this.user.photoURL,
      email: this.user.email
    });

    this.setState({ growls })
    console.log('state is: ', this.state.growls);
    this.persistGrowls();
  }

  signout(){
    firebase.auth().signOut().then(()=>{
      console.log('signout successful!!')
      this.setState({loggedIn: false});


    })
  }

  render() {
    if(!this.state.loggedIn){
      localStorage.removeItem('user');
      return <Redirect to="/" />
    }
    return (
      <div className="row">
        <h1 className="form-label">Growler >:) </h1>
        <SearchBar addGrowl={ this.addGrowl.bind(this) }/>
        <div className="growl-container">
          <GrowlList growls={this.state.growls}/>
        </div>
      <button type="submit" className="btn-logout" onClick={this.signout.bind(this)}>Sign Out</button>
      </div>

    );
  }
}

export default App;
