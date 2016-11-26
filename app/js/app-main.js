import React from 'react';

import ProfileSideBar from './main/profile-sidebar';

export default class AppMain extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <ProfileSideBar />
        </div>
      </main>
    );
  }
}
