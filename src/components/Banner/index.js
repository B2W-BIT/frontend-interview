import React, { Component } from 'react'
import { decrementHugeNumberBy1 as parseId } from 'Utilities/helpers'

class Banner extends Component {
  componentDidMount() {
    this.props.fetchUserData()
  }

  render() {
    console.log(this.props.user.info)

    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    )
  }
}

export default Banner
