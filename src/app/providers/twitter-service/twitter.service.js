export class TwitterService {

  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
  
  }

  getTweets(lastTweetId) {
    let options = {
      url: '/tweets',
      method: 'GET',
      params: {
        last_tweet_id: lastTweetId
      }
    }
    return this.$http(options);
  }

  getTweetsWithReplies(lastTweetId){
    let options = {
      url: '/tweets',
      method: 'GET',
      params: {
        last_tweet_id: lastTweetId,
        exclude_replies: false
      }
    }
    return this.$http(options);
  }

  getAccount() {
    let options = {
      url: '/lookup',
      method: 'GET'
    }
    return this.$http(options);
  }

  getSuggestions() {
    let options = {
      url: '/suggestions',
      method: 'GET'
    }
    return this.$http(options);
  }

  getTrends() {
    let options = {
      url: '/trends',
      method: 'GET'
    }
    return this.$http(options);
  }
  
  


}
