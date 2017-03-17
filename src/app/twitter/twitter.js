import angular from 'angular';

export const twitterModule = 'twitter';

class Twitter {
  constructor($http) {
    this.$http = $http;
    this.host = 'http://localhost:8000';
  }

  getUser(screenName) {
    return this.$http.get(`${this.host}/user/${screenName}`, {cache: true});
  }

  getUserTimeline(screenName, params) {
    const requestParams = {
      count: params.count,
      max_id: params.maxId,
      exclude_replies: params.excludeReplies
    };

    return this.$http.get(`${this.host}/user/${screenName}/timeline`,
      {params: requestParams});
  }

  getBrazilTrends() {
    return this.$http.get(`${this.host}/trends`);
  }
}

angular
  .module(twitterModule, [])
  .service('twitter', Twitter);
