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

  getUserTimeline(screenName, count, maxId, excludeReplies) {
    const params = {
      count,
      max_id: maxId,
      exclude_replies: excludeReplies
    };

    return this.$http.get(`${this.host}/user/${screenName}/timeline`,
      {params});
  }

  getBrazilTrends() {
    return this.$http.get(`${this.host}/trends`);
  }
}

angular
  .module(twitterModule, [])
  .service('twitter', Twitter);
