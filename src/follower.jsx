import React from 'react';

class Follower extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a href={'http://twitter.com/' + this.props.screen_name}>
        <img className="followers__image" src={this.props.profile_image_url} />
      </a>
    );
  }
}

export default Follower;