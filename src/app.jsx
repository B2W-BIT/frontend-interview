import React from 'react';
import TweetsScrollPagination from './tweets_scroll_pagination.jsx';
import Followers from './followers.jsx';
import UsersList from './users_list.jsx';
import {render} from 'react-dom';
import axios from 'axios';
import "babel-polyfill";

class Home {
  constructor() {
    this.loadFollowers();
    this.loadTweets();
    this.loadUsers();
  }

  componentWillUnmount() {
    this.followersRequest.abort();
    this.tweets.abort();
    this.users.abort();
  }

  loadFollowers() {
    this.followersRequest = axios.get('/twitter/followers')
      .then(res => {
        this.renderFollowers(res.data.users);
      }
    );
  }

  loadUsers() {
    this.users = axios.get('/twitter/friends/list')
      .then(res => {
        this.renderWhoFollowList(res.data.users);
      }
    );
  }

  loadTweets() {
    this.tweets = axios.get('/twitter/tweets')
      .then(res => {
        this.renderTweets(res.data);
      }
    );
  }

  renderTweets(tweets) {
    render(<TweetsScrollPagination tweets={tweets}/>, document.querySelector('.tweets .app__module__content'));
  }

  renderWhoFollowList(users) {
    render(<UsersList users={users}/>, document.querySelector('.how__follow__list'));
  }

  renderFollowers(users) {
    render(<Followers users={users}/>, document.querySelector('.profile__followers'));
  }
}

new Home();
