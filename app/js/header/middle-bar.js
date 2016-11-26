import React from 'react';

export default class MiddleBar extends React.Component {
  render() {
    return (
      <div className="middle-bar">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <p className="label">Tweets</p>
              <p className="value">83.3k</p>
            </div>
            <div className="stat">
              <p className="label">Following</p>
              <p className="value">83.3k</p>
            </div>
            <div className="stat">
              <p className="label">Followers</p>
              <p className="value">83.3k</p>
            </div>
            <div className="stat">
              <p className="label">Likes</p>
              <p className="value">83.3k</p>
            </div>
            <div className="stat">
              <p className="label">Lists</p>
              <p className="value">83.3k</p>
            </div>
          </div>
          <div className="actions">
            <a href=""><i /></a>
            <div className="follow">
              <i />
              <p>Folow</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
