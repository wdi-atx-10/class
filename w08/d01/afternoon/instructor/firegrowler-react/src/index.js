import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';

/*
<Route path="*" render={()=>{
  return <Redirect to="/" />
}} />
*/

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/app" component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
