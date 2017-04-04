import React, { Component } from 'react'
import { isEmpty } from 'Utilities/helpers'

class ProfileCard extends Component {
  render () {
    const { info, loading, error } = this.props.user

    if (isEmpty(info) || loading) {
      return <span className="lead">loading user data...</span>
    } else {
      const { name, screen_name, description, entities, location } = info
      return (
        <div className="col-3">
          <div className="profileCard">
            <h1>{name}<i className="verified"></i></h1>
            <h2>{screen_name}</h2>
            <p>{description}</p>
            <p><i className="pin"></i>{location}</p>
            <p><i className="link"></i>{entities.url.urls[0].display_url}</p>
          </div>
        </div>
      )
    }

  }
}

export default ProfileCard
