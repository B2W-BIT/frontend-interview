import app from './app';
import twitter from 'twitter';
import dateformat from 'dateformat';
import numeral from 'numeral';

const credential = 'AAAAAAAAAAAAAAAAAAAAAJSzvgAAAAAAt2mzRyqFBQjkbxw0N13s0OqUIjY%3DIvZ1rHbc5hxfecsi7BUmYPTmY2aaNmVLidToCZWz6lOC0jpSco';
const screenName = 'americanascom';

class TwitterClient {
  constructor() {
    this.twitterClient = new twitter({
      bearer_token: credential
    });
  }

  getUserInfo() {
    let params = {
      screen_name: screenName
    };

    return new Promise((fulfill, reject) => {
      this.twitterClient.get('/users/show', params, (err, data, response) => {
          if (err) reject(err);

          data.profile_image_url_bigger = data.profile_image_url.replace('normal', '400x400');
          data.created_at_formated = dateformat(data.created_at, 'mmmm yyyy');
          data.followers_count_formated = numeral(data.followers_count).format('0a');
          data.friends_count_formated = numeral(data.friends_count).format('0a');
          data.favourites_count_formated = numeral(data.favourites_count).format('0a');
          data.statuses_count_formated = numeral(data.statuses_count).format('0a');

          fulfill(data);
        }
      );
    });
  }

  getTweets(id) {
    let url = '/statuses/user_timeline';
    let params = {
      screen_name: screenName,
      count: 10
    };

    if (id) {
      params.max_id = id;
    }

    return new Promise((fulfill, reject) => {
      this.twitterClient.get(url, params, (err, data, response) => {
        if (err) reject(err);
        fulfill(data);
      });
    });
  }

  getFollowers() {
    let url = '/followers/list';
    let params = {
      screen_name: screenName,
      count: 10
    };

    return new Promise((fulfill, reject) => {
      this.twitterClient.get(url, params, (err, data, response) => {
        if (err) reject(err);
        fulfill(data);
      });  
    });
  }

  getSuggestions(callBack) {
    let url = '/friends/list';
    let params = {
      screen_name: screenName,
      count: 5,
      skip_status: true
    };
    return new Promise((fulfill, reject) => {
      this.twitterClient.get(url, params, (err, data, response) => {
          if (err) reject(err);
          fulfill(data);
        }
      );
    });
  }
}

export default TwitterClient;
