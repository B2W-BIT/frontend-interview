import React from 'react';

export default class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="wrap">
          <h1 className="logo">Twitter</h1>
          <ul className="topbar-menu">
            <li className="item">
              <a href="#"><span class="icon icon-home"></span>Home</a>
            </li>
            <li className="item">
              <a href="#"><span class="icon icon-thunder"></span>Moments</a>
            </li>
            <li className="item">
              <a href="#"><span class="icon icon-bell"></span>Notifications</a>
            </li>
            <li className="item">
              <a href="#"><span class="icon icon-message"></span>Messages</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
