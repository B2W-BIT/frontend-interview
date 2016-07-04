import React from 'react';

export default class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="wrap">
          <ul className="topbar-menu">
            <li className="item">
              <a href="#"><span class="icon icon-home"></span></a>
            </li>
            <li className="item">
              <a href="#"><span class="icon icon-bell"></span></a>
            </li>
            <li className="item">
              <a href="#"><span class="icon icon-message"></span></a>
            </li>
            <li className="item">
              <a href="#"><span class="icon icon-search"></span></a>
            </li>
            <li className="item">
              <a href="#">
                <img className="logged-pic" src="http://dummyimage.com/25x25/" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
