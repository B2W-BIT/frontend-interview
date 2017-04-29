import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timeline from './Components/Timeline/Timeline';
import Header from './Components/Header/Header';
import ContentLeft from './Components/Bio/BioLeft';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        
        <div className="content-full">
          <div className="center-content">
            <ContentLeft />
            <Timeline />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
