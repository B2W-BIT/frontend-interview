import {Twitter} from 'twitter-node-client';

const twitter = new Twitter({
  consumerKey: 'meci9emB7205bj4W44xQCATU6',
  consumerSecret: '0GDJYaTx85nDpnoi8zwGa0T7MSQIORt9RdKv6hAfDSRoD3R4FP'
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

export const twitterApi = {
  getUser,
  getUserTimeline
};
