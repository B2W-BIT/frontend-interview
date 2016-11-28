import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './app-header';
import AppMain from './app-main';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div className="clearfix" />
        <AppMain />
      </div>
    )
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('app')
);
