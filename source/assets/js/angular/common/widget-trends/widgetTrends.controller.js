class widgetTrendsController {
  constructor(twitterAPI) {
    this.name = 'widgetTrends';

    twitterAPI.getTrends()
      .success( (data) => {
        this.trends = data[0].trends;
      });
  }
}

widgetTrendsController.$inject = ['twitterAPI'];

export default widgetTrendsController;
