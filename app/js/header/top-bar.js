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
              <span className="Icon Icon--home" />
              <p>Home</p>
            </a>
            <a href="">
              <span className="Icon Icon--raio" />
              <p>Moments</p>
            </a>
            <a href="">
              <span className="Icon Icon--notifications" />
              <p>Notifications</p>
            </a>
            <a href="">
              <span className="Icon Icon--message" />
              <p>Messages</p>
            </a>
          </nav>
          <div className="logo">
            <a href="">
              <span className="Icon Icon--bird" />
            </a>
          </div>
          <div className="on-right">
            <div className="search">
              <form action="">
                <input type="text" placeholder="Search on Twitter" />
                <div className="submit"><span className="Icon Icon--search" /></div>
              </form>
            </div>
            <div className="profile-access">
              <a href=""><img src={profilePic} alt="" /></a>
            </div>
            <div className="tweet">
              <span className="Icon Icon--tweet" />
              <p>Tweet</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
