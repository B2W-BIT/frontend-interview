import React from 'react';

import * as Services from './services'

export default class CoverPhoto extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  async componentWillMount() {
    try {
      const userInfos = await Services.getUserInfos()
      this.setState({
        profileBanner: userInfos.profile_banner_url
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { profileBanner } = this.state
    return (
      <div className="cover-photo">
        <img src={profileBanner} />
      </div>
    );
  }
}
