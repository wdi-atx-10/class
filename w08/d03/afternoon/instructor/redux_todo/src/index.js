import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*Stuff for redux*/
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/todo_reducer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
