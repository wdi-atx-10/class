import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './NotFound';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
      <Route path="stuff" component={Stuff} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>),
  document.getElementById('root')
);
