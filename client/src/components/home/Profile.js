import React, { Component, PropTypes } from 'react';

const propTypes = {
  profile: PropTypes.object
};

const defaultProps = {
  profile: {}
};

export default class Profile extends Component {
  render() {
    const profile = this.props.profile.data;

    return (
      <div id="profile-container">
        <div className="profile-picture">
          <img src={profile.profile_image_url ? profile.profile_image_url.replace('_normal', '_200x200') : ''} />
        </div>
        <div className="profile-details">
          <div className="profile-name">
            <h3>
              {profile.name}
            </h3>
          </div>
          <div className="profile-screen-name">
            @{profile.screen_name}
          </div>
          <div className="profile-description">
            {profile.description}
          </div>
          <div className="profile-location">
            {profile.location}
          </div>
          <div className="join-date">
            {profile.created_at}
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;
