export class TwitterService {

  constructor ($log, $http, $resource, stringService) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.$resource = $resource;
    this.stringService = stringService;
    this.API_BASE = '';
    this.TOKE = '';
    this.AUTHORIZATION_TOKEN = '';
    this.LIMIT = '';
    this.getResource();

  }

  getResource(){
    this.stringService.getResource().then((response)=>{
      this.API_BASE = response.data.API_BASE;
      this.TOKEN = response.data.API_TOKEN;
      this.AUTHORIZATION_TOKE = response.data.API_TOKEN_AUTHORIZATION
    }, ()=>{})
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

  getAccount() {
    let options = {
      url: '/lookup',
      method: 'GET'
    }
    return this.$http(options);
  }
  


}
