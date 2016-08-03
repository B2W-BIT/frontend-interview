import React, { Component, PropTypes } from 'react';

const propTypes = {
  coverPhoto: PropTypes.string,
  bgColor: PropTypes.string,
  stats: PropTypes.object
};

const defaultProps = {
  coverPhoto: '',
  bgColor: '',
  stats: {
    tweetCount: 0,
    followingCount: 0,
    followersCount: 0,
    likesCount: 0
  }
};

export default class Header extends Component {
  render() {
    const { coverPhoto, bgColor, stats } = this.props;

    return (
      <header style={{backgroundColor:'#'+bgColor, backgroundImage:'url('+coverPhoto+')'}}>
        <div id="header-menu-container">
          <div className="header-menu">
            <div className="header-menu-item">
              <span className="header-menu-item-title">TWEETS</span>
              <span className="header-menu-item-content">{stats.tweetCount}</span>
            </div>
            <div className="header-menu-item">
              <span className="header-menu-item-title">FOLLOWING</span>
              <span className="header-menu-item-content">{stats.followingCount}</span>
            </div>
            <div className="header-menu-item">
              <span className="header-menu-item-title">FOLLOWERS</span>
              <span className="header-menu-item-content">{stats.followersCount}</span>
            </div>
            <div className="header-menu-item">
              <span className="header-menu-item-title">LIKES</span>
              <span className="header-menu-item-content">{stats.likesCount}</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
