import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import '../assets/styles/style.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
