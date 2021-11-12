import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Store from './Store'

ReactDOM.render(
  <React.StrictMode>
    <Store />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
