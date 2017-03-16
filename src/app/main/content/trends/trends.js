import './trends.css';

class TrendsCtrl {
  constructor(twitter) {
    twitter.getBrazilTrends()
    .then(response => {
      const trends = response.data[0].trends;
      if (trends) {
        // Get first 10 trends
        this.trends = trends.slice(0, 10);
      }
    });
  }
}

export const trends = {
  template: require('./trends.html'),
  controllerAs: 'trendsCtrl',
  controller: TrendsCtrl
};
