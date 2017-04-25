import React, { Component } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Timeline from './components/Timeline';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

class Twitter extends Component {
  
    render() {      
            document.title = 'Twitter clone';

        let backgroundColor = {
            background: "#f5f8fa"
        }; 
        return (
          <div style={backgroundColor}>
                <Header />
                
                <div className="container">
                    <div className="row">
                        <Profile />
                        <Timeline />
                    </div>
                </div>
          </div>
        );
    }
}

export default Twitter;