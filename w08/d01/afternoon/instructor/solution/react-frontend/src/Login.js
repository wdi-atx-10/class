import React, {Component} from 'react';
import firebase from './firebase';
import {Redirect} from 'react-router';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: localStorage.getItem('user') ? true : false
    }
  }

  persistLocal(user){
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({ loggedIn : true })

  }

  googleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      var token = result.credential.accessToken;
      var user = result.user;

      console.log(token)
      console.log(user)
      this.persistLocal(user)
   }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(error.code)
      console.log(error.message)
   });
  }

  githubSignIn(){
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token)
        console.log(user)
        this.persistLocal(user)
     }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code)
        console.log(error.message)
     });
  }


  render(){
    if(this.state.loggedIn)
      return (<Redirect to="/app"/>)

    return(
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
            <h1 className="splash-heading">WDI-10 FireGrowler!</h1>

            { /* Google */ }
            <a className="btn btn-block btn-social btn-block btn-google" onClick={this.googleSignIn.bind(this)}>
              <span className="fa fa-google"></span>
              Sign in with Google
            </a>

            { /* Github */ }
            <a className="btn btn-block btn-social btn-block btn-github" onClick={this.githubSignIn.bind(this)}>
              <span className="fa fa-github"></span>
              Sign in with Github
            </a>

          </div>
        </div>
    )
  }
}

export default Login;
