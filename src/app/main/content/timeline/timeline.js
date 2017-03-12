import './timeline.css';

class TimelineController {
  constructor(twitter) {
    twitter
      .getUser('americanascom')
      .then(user => {
        this.user = user.data;
      });
  }
}

export const timeline = {
  template: require('./timeline.html'),
  controller: TimelineController,
  controllerAs: 'timelineCtrl'
};
