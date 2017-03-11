/* eslint-disable camelcase */
import {Twitter} from 'twitter-node-client';

const twitter = new Twitter({
  consumerKey: 'meci9emB7205bj4W44xQCATU6',
  consumerSecret: '0GDJYaTx85nDpnoi8zwGa0T7MSQIORt9RdKv6hAfDSRoD3R4FP'
});

const req = {};

const getUser = screenName => {
  const params = {screen_name: screenName};

  return new Promise((resolve, reject) =>
    twitter.getUser(params, reject, resolve));
};

const getUserTimeline = screenName => {
  const params = {
    screen_name: screenName,
    count: req.query.count,
    max_id: req.query.max_id,
    exclude_replies: req.query.exclude_replies
  };

  return new Promise((resolve, reject) =>
    twitter.getUserTimeline(params, reject, resolve));
};

const twitterApi = {
  getUser,
  getUserTimeline
};

module.exports = twitterApi;
