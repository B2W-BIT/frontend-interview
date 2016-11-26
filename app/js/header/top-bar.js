import React from 'react';

import * as Services from './services'

export default class TopBar extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  async componentWillMount() {
    try {
      const userInfos = await Services.getUserInfos()
      this.setState({
        profilePic: userInfos.profile_image_url
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { profilePic } = this.state
    return (
      <div className="top-bar">
        <div className="container">
          <nav>
            <a href="">
              <i />
              Home
            </a>
            <a href="">
              <i />
              Moments
            </a>
            <a href="">
              <i />
              Notifications
            </a>
            <a href="">
              <i />
              Messages
            </a>
          </nav>
          <div className="logo">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="on-right">
            <div className="search">
              <form action="">
                <input type="text" placeholder="Search on Twitter" />
                <input type="submit" value="s" />
              </form>
            </div>
            <div className="profile-access">
              <a href=""><img src={profilePic} alt="" /></a>
            </div>
            <div className="tweet">
              <i />
              <p>Tweet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
