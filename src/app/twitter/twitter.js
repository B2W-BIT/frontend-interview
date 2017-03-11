import angular from 'angular';

export const twitterModule = 'twitter';

angular
  .module('twitter', [])
  .service('twitter', $http => {
    const getUser = screenName =>
      $http.get(`http://localhost:8000/user/${screenName}`);

    return {
      getUser
    };
  });
