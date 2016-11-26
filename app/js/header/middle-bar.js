import React from 'react';

import * as Services from './services'

export default class MiddleBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  async componentWillMount() {
    try {
      const userInfos = await Services.getUserInfos()
      this.setState({
          followersCount: userInfos.followers_count
          , statusesCount: userInfos.statuses_count
          , friendsCount: userInfos.friends_count
          , favouritesCount: userInfos.favourites_count
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const {
      followersCount
      , statusesCount
      , friendsCount
      , favouritesCount
    } = this.state
    return (
      <div className="middle-bar">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <p className="label">Tweets</p>
              <p className="value">{statusesCount}</p>
            </div>
            <div className="stat">
              <p className="label">Following</p>
              <p className="value">{friendsCount}</p>
            </div>
            <div className="stat">
              <p className="label">Followers</p>
              <p className="value">{followersCount}</p>
            </div>
            <div className="stat">
              <p className="label">Likes</p>
              <p className="value">{favouritesCount}</p>
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
