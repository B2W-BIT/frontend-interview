import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import timeline from './Reducers/timeline';
import thunk from 'redux-thunk';

const store = createStore(timeline,compose(
  applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById('root')
);
