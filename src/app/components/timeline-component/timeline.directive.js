"use strict";

export function TimelineDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/timeline-component/timeline.html',
    controller: TimelineController,
    controllerAs: 'timelineCtrl',
    bindToController: true
  };

  return directive;
}

class TimelineController {
  constructor ($timeout, twitterService) {
    'ngInject';
    
    this.tweets = [];
    this.twitterService = twitterService;
    this.getTweets();
  }

  getTweets(){
    let ts = this.tweets;
    this.twitterService
      .getTweets().then(response => {
        angular.forEach(response.data, item => {
          ts.push(item);
        })
        this.tweets = ts;
      }, (error)=>{
          this.$log.info(error);
      })    
  }

  setTweets(tweets){
    this.tweets = tweets;
  }
}


