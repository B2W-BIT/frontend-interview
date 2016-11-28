import React from 'react';
import moment from 'moment';

import * as Services from '../utils/services'


export default class ProfileSideBar extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  async componentWillMount() {
    try {
      const userInfos = await Services.getUserInfos()
      this.setState({
        description: userInfos.description,
        name: userInfos.name,
        screenName: userInfos.screen_name,
        location: userInfos.location,
        createdAt: userInfos.created_at,
        url: userInfos.entities.url.urls[0].display_url,
      })
      console.log(userInfos)
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    const {
        description,
        name,
        screenName,
        location,
        createdAt,
        url,
    } = this.state
    const created = moment(createdAt).format("MMMM YYYY")
    return (
      <div className="profile-info-side-bar">
        <div className="profile-card">
          <h1 className="name">{name}</h1>
          <h2 className="screenname">@{screenName}</h2>
          <p className="bio">
            {description}
          </p>
          <div className="location">
            <span className="Icon Icon--geo" />
            <p>{location}</p>
          </div>
          <div className="url">
            <span className="Icon Icon--url" />
            <p><a href="">{url}</a></p>
          </div>
          <div className="join-date">
            <span className="Icon Icon--calendar" />
            <p>Joined {created}</p>
          </div>
          <div className="tweet">
            <span className="Icon Icon--tweet" />
            <p>Tweet to {name}</p>
          </div>
        </div>
      </div>
    );
  }
}
