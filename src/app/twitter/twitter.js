import angular from 'angular';

export const twitterModule = 'twitter';

class Twitter {
  constructor($http) {
    this.$http = $http;
    this.host = 'http://localhost:8000';
  }

  getUser(screenName) {
    return this.$http.get(`${this.host}/user/${screenName}`);
  }

  getUserTimeline(screenName, count, maxId, excludeReplies) {
    return this.$http.get(`${this.host}/user/${screenName}/timeline`, {
      params: {
        count,
        max_id: maxId,
        exclude_replies: excludeReplies
      }
    });
  }
}

angular
  .module(twitterModule, [])
  .service('twitter', Twitter);
