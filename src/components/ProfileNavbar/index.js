import React from 'react'

const Navbar = ({
  statuses_count
  , friends_count
  , followers_count
  , favourites_count
}) => {
  return (
    <div className="profile-navbar">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ul className="profileNav-list">
              <li className="profileNav-item is-active">
                <span className="profileNav-label">tweets</span>
                <span className="profileNav-value">
                  {statuses_count}
                </span>
              </li>
              <li className="profileNav-item">
                <span className="profileNav-label">seguindo</span>
                <span className="profileNav-value">
                  {friends_count}
                </span>
              </li>
              <li className="profileNav-item">
                <span className="profileNav-label">seguidores</span>
                <span className="profileNav-value">
                  {followers_count}
                </span>
              </li>
              <li className="profileNav-item">
                <span className="profileNav-label">curtidas</span>
                <span className="profileNav-value">
                  {favourites_count}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
