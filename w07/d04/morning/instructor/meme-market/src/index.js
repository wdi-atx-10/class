import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import dotenv from 'dotenv';

dotenv.config({ silent: true });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
