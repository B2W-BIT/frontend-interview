import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="profile--micro">
        <a href={'http://twitter.com/' + this.props.user.screen_name}>
          <span className="profile__avatar">
            <img src={this.props.user.profile_image_url} alt="" />
          </span>
          <span className="profile__description__wrapped">
            <span className="profile__card__name">
              {this.props.user.name}
            </span>
            <span className="profile__card__nickname">
            @{this.props.user.screen_name}
            </span>
          </span>
        </a>
        <button className="btn btn__follow btn--small" type="button">
          <span className="icon icon--follow"></span>
          Follow
        </button>
      </div>
    );
  }
}

export default User;