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
          followersCount: this.formatCount(userInfos.followers_count)
          , statusesCount: this.formatCount(userInfos.statuses_count)
          , friendsCount: this.formatCount(userInfos.friends_count)
          , favouritesCount: this.formatCount(userInfos.favourites_count)
      })
    } catch (e) {
      console.log(e)
    }
  }

  formatCount(count) {
    const M = 1000000
    const TenK = 10000
    const K = 1000
    if (count > M) {
      return Math.floor(count/M) + 'M'
    } else if (count > TenK) {
      return Math.floor(count/K) + 'K'
    } else {
      return count
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
            <div className="stat active">
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
            <span className="Icon Icon--cog" />
            <div className="follow">
              <span className="Icon Icon--follow" />
              <p>Folow</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
