import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <App store={ store } />,
  document.getElementById('root')
);
