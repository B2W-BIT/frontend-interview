import './tweet.css';

class TweetCtrl {
  constructor(flickr) {
    this.flickr = flickr;
  }

  $onInit() {
    this.getPhoto();
  }

  getFirstHashtag() {
    const hashtags = this.tweet.entities.hashtags;

    if (hashtags && hashtags.length) {
      return hashtags[0].text;
    }
  }

  getPhoto() {
    const firstHashtag = this.getFirstHashtag();

    if (firstHashtag) {
      this.flickr.getPhoto(firstHashtag)
      .then(photoUrl => {
        this.photo = photoUrl;
      });
    }
  }
}

export const tweet = {
  template: require('./tweet.html'),
  controllerAs: 'tweetCtrl',
  controller: TweetCtrl,
  bindings: {
    tweet: '<'
  }
};
