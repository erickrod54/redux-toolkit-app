import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './Store';
import { Provider } from 'react-redux'

/**React-redux toolkit app - version 1  - 'index' js - Features:
 * 
 *      --> Importing the 'store' from the 'Store' js file.
 * 
 *      --> Importing the 'Provider' from 'react-redux'
 * 
 * Note: Similar to the context-api i'll wrap the application
 * with the 'Provider' ( this provider is own to redux library)
 * and provide the store 
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
