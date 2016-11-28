import React from 'react';

import ProfileSideBar from './main/profile-sidebar';
import Timeline from './main/timeline';

export default class AppMain extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <ProfileSideBar />
          <div className="main-content">
            <Timeline />
          </div>
        </div>
      </main>
    );
  }
}
