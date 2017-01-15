"use strict";

export function TweetDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/tweet-component/tweet.html',
    bindings: {
      tweet: '='
    },
    controller: TweetController,
    controllerAs: 'tweetCtrl',
    bindToController: true
  };

  return directive;
}

class TweetController {
  constructor ($log, $scope) {
    'ngInject';
    this.$log = $log;
    this.tweet = $scope.tweet;

  }
}
