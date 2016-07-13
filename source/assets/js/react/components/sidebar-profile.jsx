import React, { Component, PropTypes } from 'react';
import ProfileCard from './profile-card.jsx';
import ProfilePhotosVideos from './profile-photos-videos.jsx';
import ProfileFollowers from './profile-followers.jsx';

export default class SidebarrProfile extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <aside className="sidebarProfile">
        <ProfileCard />
        <ProfileFollowers />
        <ProfilePhotosVideos />
      </aside>
    );
  }
}
