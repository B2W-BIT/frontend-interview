import React from 'react';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let tweet = this.props.tweet;

    return (
      <div className="tweets__list__item__content">
        <div className="profile--micro">
          <a href="">
            <span className="profile__avatar">
              <img src={tweet.user.profile_image_url} alt="" />
            </span>
            <span className="truncate">
              <span className="profile__card__name">
                {tweet.user.name}
              </span>
              <span className="profile__card__nickname">
                @{tweet.user.screen_name}
              </span>
            </span>
          </a>
        </div>
        <div className="tweets__list__item__text">
          {tweet.text}
        </div>
      </div>
    );
  }
}

export default Tweet;