import React, { Component, PropTypes } from 'react';
import MakeRequestJson from '../utils/request';
import { thousandsFormatter } from '../utils/miscellaneous';

export default class ProfileNumbers extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.numbers;
  }

  componentDidMount() {
    let me = this;

    MakeRequestJson({ url: '/1.1/users/show.json?screen_name=americanascom'}).then((data) => {
      me.setState({
        followersCount  : thousandsFormatter(data.followers_count),
        friendsCount    : thousandsFormatter(data.friends_count),
        favouritesCount : thousandsFormatter(data.favourites_count),
        statusesCount   : thousandsFormatter(data.statuses_count)
      });
    });
  }

  render() {
    return (
      <nav className="profileNumbers">
        <ul className="profileNumbers-list">
          <li className="profileNumbers-item">
            <a className="profileNumbers-link on" href="">
              <span className="profileNumbers-title">Tweets</span>
              <em className="profileNumbers-amount">{this.state.followersCount}</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Following</span>
              <em className="profileNumbers-amount">{this.state.friendsCount}</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Followers</span>
              <em className="profileNumbers-amount">{this.state.favouritesCount}</em>
            </a>
          </li>
          <li className="profileNumbers-item">
            <a className="profileNumbers-link" href="">
              <span className="profileNumbers-title">Likes</span>
              <em className="profileNumbers-amount">{this.state.statusesCount}</em>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
