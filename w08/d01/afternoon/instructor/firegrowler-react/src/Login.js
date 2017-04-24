import React, {Component} from 'react';
import firebase from './firebase';
import {Redirect} from 'react-router';
import './bower_components/bootstrap/dist/css/bootstrap.css';
import './bower_components/font-awesome/css/font-awesome.css';
import './bower_components/bootstrap-social/bootstrap-social.css';


class Login extends Component {

  constructor(props){
    super(props)

    this.state ={
      loggedIn: localStorage.getItem('user') ? true : false
    }
  }

  signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(response => {
      console.log('user: ', response.user);
      localStorage.setItem('user', JSON.stringify(response.user) )
      this.setState({ loggedIn: true })
    }).catch(error => {
      console.error('There was an error: ', error);
    });
  }

  signInWithGithub(){
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(response => {
      console.log('user: ', response.user);
      localStorage.setItem('user', JSON.stringify(response.user) )
      this.setState({ loggedIn: true })
    }).catch(error => {
      console.error('There was an error: ', error);
    });
  }

  render(){
    if(this.state.loggedIn){
      return(<Redirect to="/app" />)
    }

    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <h1 className="splash-heading">WDI-10 FireGrowler!</h1>

            <a onClick={this.signInWithGoogle.bind(this)} className="btn btn-block btn-social btn-block btn-google">
              <span className="fa fa-google"></span>
              Sign in with Google
            </a>

            <a onClick={this.signInWithGithub.bind(this)} className="btn btn-block btn-social btn-block btn-github">
              <span className="fa fa-github"></span>
              Sign in with Github
            </a>

          </div>
        </div>
      </div>
    )
  }
}


export default Login;
