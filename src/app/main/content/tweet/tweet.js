import './tweet.css';

export const tweet = {
  template: require('./tweet.html'),
  controllerAs: 'tweetCtrl',
  bindings: {
    tweet: '<'
  }
};
