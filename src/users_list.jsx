import React from 'react';
import User from './user.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="users__list">
        {this.props.users.map(user =>
          <li key={user.id} className="users__list__item">
            <User user={user} />
          </li>
          )}
        </ul>
      </div>
    );
  }
}

export default UsersList;