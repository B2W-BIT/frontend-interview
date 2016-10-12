import React from 'react';
import FollowerItem from './follower.jsx';

class Followers extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h5 className="followers__list__title">
          <span className="icon icon--person icon--medium"></span>
          Followers you know
        </h5>
        <ul className="followers__list">
          {this.props.users.map(follower =>
            <li className="followers__list__item" key={follower.id}>
              <FollowerItem profile_image_url={follower.profile_image_url} screen_name={follower.screen_name} />
            </li>
            )}
        </ul>
      </div>
    );
  }
}

export default Followers;