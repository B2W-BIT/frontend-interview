import React from 'react';

export default class TopBar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="container">
          <nav>
            <a href="">
              <i />
              Home
            </a>
            <a href="">
              <i />
              Moments
            </a>
            <a href="">
              <i />
              Notifications
            </a>
            <a href="">
              <i />
              Messages
            </a>
          </nav>
          <div className="logo">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="on-right">
            <div className="search">
              <form action="">
                <input type="text" />
                <input type="submit" />
              </form>
            </div>
            <div className="profile-access">
              <a href=""><img src="" alt="" /></a>
            </div>
            <div className="tweet">
              <i />
              <p>Tweet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
