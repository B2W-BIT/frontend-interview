class TwitterService {
  constructor($http) {
    this.$http = $http;

    this.REQUEST_TRENDS = {
      url: '/1.1/trends/place.json?id=23424768',
      method: 'GET'
    };

    this.REQUEST_SUGGESTIONS = {
      url: '/1.1/users/suggestions/governo.json',
      method: 'GET'
    };
  }

  getTrends() {
    return this.$http(this.REQUEST_TRENDS);
  }

  getSuggestions() {
    return this.$http(this.REQUEST_SUGGESTIONS);
  }
}

TwitterService.$inject = ['$http'];

export default TwitterService;
