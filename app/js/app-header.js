import React from 'react';

import CoverPhoto from './header/cover-photo';
import TopBar from './header/top-bar';
import HeaderAvatar from './header/avatar';
import MiddleBar from './header/middle-bar';

export default class AppHeader extends React.Component {
  render() {
    return (
      <div className="header">
        <TopBar />
        <CoverPhoto />
        <HeaderAvatar />
        <MiddleBar />
      </div>
    );
  }
}
