import './timeline.css';

class TimelineController {
  constructor(twitter) {
    twitter
      .getUserTimeline('americanascom')
      .then(response => {
        this.tweets = response.data;
      });
  }
}

export const timeline = {
  template: require('./timeline.html'),
  controller: TimelineController,
  controllerAs: 'timelineCtrl'
};
