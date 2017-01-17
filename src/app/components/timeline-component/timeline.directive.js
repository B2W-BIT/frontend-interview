"use strict";

/*
* Defining controllerAs alias
*/
let timelineCtrl;


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
  constructor (twitterService) {
    'ngInject';
    
    timelineCtrl = this;
    this.tweets = [];
    this.lastId = '';
    this.twitterService = twitterService;
    this.getTweets();

    
    angular.element(window).scroll(function() {
      let length = angular.element(window).scrollTop() + angular.element(window).height();
      if( length === angular.element(document).height()) {
          timelineCtrl.getTweets();
      }
    });
  }

  getTweets(){
    this.twitterService
      .getTweets(timelineCtrl.lastId).then(response => {
        angular.forEach(response.data, item => {
          console.log(item)
          if (timelineCtrl.lastId !== item.id_str)
            timelineCtrl.tweets.push(item);
        })
        this.lastId = timelineCtrl.tweets[timelineCtrl.tweets.length-1].id_str;
        
      }, (error)=>{
          this.$log.info(error);
      })    
  }

  setTweets(tweets){
    this.tweets = tweets;
  }
}


