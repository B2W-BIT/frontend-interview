import './tweet.css';

class TweetController {
  constructor(twitter) {
    twitter
      .getUser('americanascom')
      .then(user => {
        this.user = user.data;
      });
  }
}

export const tweet = {
  template: require('./tweet.html'),
  controller: TweetController,
  controllerAs: 'tweetCtrl',
  bindings: {
    tweet: '<'
  }
};
