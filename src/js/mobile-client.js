require('../styles/mobile.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Topbar from './components/MobileTopbar.js';
import HeaderPage from './components/MobileHeaderPage.js';
import Timeline from './components/MobileTimeline.js';

class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: {},
      splash: true
    };
  }

  componentDidMount() {
    let url = 'http://ubuntu:8080/api/user';

    this._makeRequest(url);
  }

  _makeRequest(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === xmlhttp.DONE) {
        if (xmlhttp.status === 200) {
          this._handleResponse(xmlhttp.responseText);
        }
      }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  _handleResponse(r) {
    let data = JSON.parse(r);

    this.setState({
      userData: data,
      splash: false
    });
  }

  render(){
    var splashClass = classNames({
      'splash-container': true,
      'active': this.state.splash
    });
    return (
      <div>
        <Topbar/>
        <HeaderPage userInfo={this.state.userData}/>
        <div className="wrap">
          <Timeline/>
        </div>
        <div className={splashClass}></div>
      </div>
    );
  }
}

const element = document.getElementById('mobi-app');

ReactDOM.render(<Layout />, element);
