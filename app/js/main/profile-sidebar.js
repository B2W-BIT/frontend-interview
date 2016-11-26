import React from 'react';

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
        descriptionUrl: userInfos.entities.description.urls[0].display_url,
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
        descriptionUrl,
        name,
        screenName,
        location,
        createdAt,
        url,
    } = this.state
    return (
      <div className="profile-info-side-bar">
        <div className="profile-card">
          <h1 className="name">{name}</h1>
          <h2 className="screenname">@{screenName}</h2>
          <p className="bio">
            {description}
            <a href="">{descriptionUrl}</a>
          </p>
          <div className="location">
            <i />
            <p>{location}</p>
          </div>
          <div className="url">
            <i />
            <p><a href="">{url}</a></p>
          </div>
          <div className="join-date">
            <i />
            <p><a href="">{createdAt}</a></p>
          </div>
          <div className="tweet">
            <i />
            <p>Tweet to americanads</p>
          </div>
        </div>
        <div className="photo-trail">
          <div className="heading">
            <i />
            <p><a href="">2000 fotos</a></p>
          </div>
          <div className="media-box">
            <div className="photo">
              <a href=""><img src="" alt="" /></a>
            </div>
            <div className="photo">
              <a href=""><img src="" alt="" /></a>
            </div>
            <div className="photo">
              <a href=""><img src="" alt="" /></a>
            </div>
            <div className="photo">
              <a href=""><img src="" alt="" /></a>
            </div>
            <div className="photo">
              <a href=""><img src="" alt="" /></a>
            </div>
            <div className="photo">
              <a href=""><img src="" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
