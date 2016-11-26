import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './app-header';

class App extends React.Component {
  render() {
    return (<AppHeader />);
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('app')
);
