import './timeline.css';

class TimelineController {
  constructor(twitter) {
    twitter
      .getUserTimeline('globocom', null, null, true)
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
