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
  constructor (twitterService, constants) {
    'ngInject';
    
    timelineCtrl = this;
    this.tweets = [];
    this.lastId = '';
    this.replies = false;
    this.twitterService = twitterService;

    //Strings
    this.TWEETS_AND_REPLIES = constants.TIMELINE_COMPONENT.TWEETS_AND_REPLIES;
    this.TWEETS = constants.TWEETS;

    this.getTweets();

    
    angular.element(window).scroll(function() {
      let length = angular.element(window).scrollTop() + angular.element(window).height();
      if( length === angular.element(document).height()) {

          if (!timelineCtrl.replies) timelineCtrl.getTweets();
          else timelineCtrl.getTweetsWithReplies();
      }
    });
  }

  getTweets(){
    this.twitterService
      .getTweets(timelineCtrl.lastId).then(response => {
        angular.forEach(response.data, item => {
          if (timelineCtrl.lastId !== item.id_str)
            timelineCtrl.tweets.push(item);
        })
        this.lastId = timelineCtrl.tweets[timelineCtrl.tweets.length-1].id_str;
        
      }, (error)=>{
          this.$log.info(error);
      })    
  }

  getTweetsWithReplies(){
    this.twitterService
      .getTweetsWithReplies(timelineCtrl.lastId).then(response => {
        angular.forEach(response.data, item => {
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

  changeTweetsViewed(replie){
    timelineCtrl.lastId = '';
    timelineCtrl.tweets = [];

    if (replie){
      this.replies = true;
      timelineCtrl.getTweetsWithReplies();
      
    } else {
      this.replies = false;
      timelineCtrl.getTweets();
    }
  }
}


