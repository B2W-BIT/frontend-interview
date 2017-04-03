import React, { Component } from 'react'
import { isEmpty } from 'Utilities/helpers'

class ProfileCard extends Component {
  render () {
    const { info, loading, error } = this.props.user

    if (isEmpty(info) || loading) {
      return <span className="lead">loading user data...</span>
    } else {
      const { name, screen_name, description, entities } = info
      console.log(name, screen_name, description, entities)
      return (
        <div className="col-3">
          <div className="profileCard">
            <h1>{name}</h1>
            <h2>{screen_name}</h2>
            <p>{description}</p>
            <p>{entities.url.urls.display_url}</p>
          </div>
        </div>
      )
    }

  }
}

export default ProfileCard
