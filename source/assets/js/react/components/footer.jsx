import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="footer">
        <p className="footer-copyright">© 2016 Twitter</p>
        <nav className="footer-mainMenu">
          <ul className="footer-mainMenu-list">
            <li className="footer-mainMenu-item">
              <a className="footer-mainMenu-link" href="">About</a>
            </li>
            <li className="footer-mainMenu-item">
              <a className="footer-mainMenu-link" href="">Help</a>
            </li>
            <li className="footer-mainMenu-item">
              <a className="footer-mainMenu-link" href="">Terms</a>
            </li>
            <li className="footer-mainMenu-item">
              <a className="footer-mainMenu-link" href="">Privacy</a>
            </li>
            <li className="footer-mainMenu-item">
              <a className="footer-mainMenu-link" href="">Cookies</a>
            </li>
            <li className="footer-mainMenu-item">
              <a className="footer-mainMenu-link" href="">Ads</a>
            </li>
            <li className="footer-mainMenu-item">
              <a className="footer-mainMenu-link" href="">info</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
