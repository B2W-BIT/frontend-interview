import './timeline.css';

class TimelineController {
  constructor(twitter) {
    this.twitter = twitter;
    this.loadMoreTweetsLabel = 'Load More';

    this.screenName = 'americanascom';
    this.timelineParams = {
      count: 30,
      maxId: null,
      excludeReplies: false
    };

    this.twitter
      .getUserTimeline(this.screenName, this.timelineParams)
      .then(response => {
        this.tweets = response.data;
      });
  }

  loadMoreTweets() {
    this.loadMoreTweetsLabel = 'Loading...';

    const lastTweet = this.tweets[this.tweets.length - 1];
    this.timelineParams.maxId = lastTweet.id_str;

    this.twitter
      .getUserTimeline(this.screenName, this.timelineParams)
      .then(response => {
        const olderTweets = response.data;
        // Remove first element (same as last already loaded)
        olderTweets.shift();
        this.tweets = this.tweets.concat(olderTweets);

        this.loadMoreTweetsLabel = 'Load More';
      });
  }
}

export const timeline = {
  template: require('./timeline.html'),
  controller: TimelineController,
  controllerAs: 'timelineCtrl'
};
