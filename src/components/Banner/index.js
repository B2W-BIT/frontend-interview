import React, { Component } from 'react'
import Navbar from 'Components/ProfileNavbar'

class Banner extends Component {
  componentDidMount() {
    this.props.fetchUserData()
  }

  render() {
    const {
      profile_banner_url
      , profile_image_400
      , statuses_count
      , friends_count
      , followers_count
      , favourites_count
    } = this.props.user.info

    const navBarProps = {
      statuses_count
      , friends_count
      , followers_count
      , favourites_count
    }

    const bannerStyle = {
      backgroundImage: `url(${profile_banner_url})`
    }

    return (
      <div>
        <div className="header">
          <div className="before" style={bannerStyle}></div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <Navbar {...navBarProps} />
          </div>
        </div>
        <div className="container">
          <div className="profile-image-container">
            <div className="profile-image">
              <img src={profile_image_400} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
