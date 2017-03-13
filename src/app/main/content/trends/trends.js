import './trends.css';

class TrendsCtrl {
  constructor(twitter) {
    twitter.getBrazilTrends()
    .then(response => {
      this.trends = response.data[0].trends;
    });
  }
}

export const trends = {
  template: require('./trends.html'),
  controllerAs: 'trendsCtrl',
  controller: TrendsCtrl
};
