import React from 'react';

import ProfileSideBar from './main/profile-sidebar';
import Timeline from './main/timeline';
import WhoToFollow from './main/who-to-follow';
import Trends from './main/trends';

export default class AppMain extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <ProfileSideBar />
          <div className="main-content">
            <Timeline />
            <div className="sidebar">
              <WhoToFollow />
              <Trends />
            </div>
          </div>
        </div>
      </main>
    );
  }
}
