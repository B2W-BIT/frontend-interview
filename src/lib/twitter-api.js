import {Twitter} from 'twitter-node-client';

const twitter = new Twitter({
  consumerKey: 'islSDzqun7mLndT9THKxXxKTu',
  consumerSecret: '9VTzyioIbpnvvKFJ6ynkVI0FGfi7Ieg0fGms9N9E5WP1Cz3JjR',
  accessToken: '802361788562079744-DnHQYshmb2ykfRjbqUc0jO589nehP9t',
  accessTokenSecret: 'wuCyFZFQqgSGH0Z0mKLqWDSbR8zTwZmuWegFRoAkIV7zV'
});

const getUser = screenName => {
  const params = {screen_name: screenName};

  return new Promise((resolve, reject) =>
    twitter.getUser(params, reject, resolve));
};

const getUserTimeline = (screenName, count, maxId, excludeReplies) => {
  const params = {
    screen_name: screenName,
    count,
    max_id: maxId,
    exclude_replies: excludeReplies
  };

  return new Promise((resolve, reject) =>
    twitter.getUserTimeline(params, reject, resolve));
};

const getUserProfileBanner = screenName => {
  const url = '/users/profile_banner.json';
  const params = {screen_name: screenName};

  return new Promise((resolve, reject) =>
    twitter.getCustomApiCall(url, params, reject, resolve));
};

const getTrends = () => {
  const url = '/trends/place.json';

  const brazilId = 23424768;
  const params = {id: brazilId};

  return new Promise((resolve, reject) =>
    twitter.getCustomApiCall(url, params, reject, resolve));
};

// Undocumented Twitter urls
// https://github.com/owencoder/twitter_undocumented

export const twitterApi = {
  getUser,
  getUserTimeline,
  getUserProfileBanner,
  getTrends
};
