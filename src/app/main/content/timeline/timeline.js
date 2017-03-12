import './timeline.css';

class TimelineController {
  constructor(twitter) {
    twitter
      .getUserTimeline('americanascom')
      .then(tweets => {
        this.tweets = tweets.data;
      });
  }
}

export const timeline = {
  template: require('./timeline.html'),
  controller: TimelineController,
  controllerAs: 'timelineCtrl'
};
