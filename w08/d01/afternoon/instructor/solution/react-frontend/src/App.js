import React, { Component } from 'react';
import AddGrowl from './components/AddGrowl';
import GrowlList from './components/GrowlList';
import firebase from './firebase';
import { Redirect } from 'react-router';

import '../bower_components/bootstrap/dist/css/bootstrap.css';
import '../bower_components/font-awesome/css/font-awesome.css';
import '../bower_components/bootstrap-social/bootstrap-social.css';
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.uid = JSON.parse(localStorage.getItem('user')).uid;
    this.dbRef = firebase.database().ref('/');

    this.state = {
      growls: [],
      loggedIn: localStorage.getItem('user') ? true : false,
      heading: 'WDI-10 FireGrowler >>:{}'
    }
  }

  persistGrowls(){
    this.dbRef.set({
      growls: this.state.growls
    });
  }

  componentDidMount(){
    this.showGrowls()
  }

  showGrowls(){
    this.dbRef.on('value',(snapshot)=>{
      const db = snapshot.val();
      // console.log('db: ', db)

      if(db){
        this.setState({growls: db.growls})
      }
    });
  }

  addGrowl(msg){

    const growls = this.state.growls;
    const user = JSON.parse(localStorage.getItem('user'));

    growls.unshift({
      name: user.displayName,
      email: user.email,
      pic: user.photoURL,
      msg: msg,
      id: Date.now()
    })

    this.setState({growls})
    console.log('state: ', this.state.growls)
    this.persistGrowls()
  }

  signout() {
    firebase.auth().signOut().then(() => {
      console.log('Signout Succesfull');
      this.setState({ loggedIn: false })
      console.log('signout: ', this.state.loggedIn)
      localStorage.removeItem('user');
    }, function(error) {
      console.log('Signout Failed')
    });
  }

  render() {
    if(!this.state.loggedIn){
      return (<Redirect to='/' />)
    }

    return (
      <div className="container">
        <div className="row">
          <h1 className="form-label">{this.state.heading} </h1>
          <AddGrowl addGrowl={this.addGrowl.bind(this)} />
        </div>
        <div className="row">
          <GrowlList growls={this.state.growls}/>
          <button type="submit" className="btn btn-default btn-logout" onClick={this.signout.bind(this)}>Sign Out</button>
        </div>
      </div>
    );
  }
}

export default App;
