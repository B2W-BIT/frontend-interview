import angular from 'angular';

export const flickrModule = 'flickr';

class Flickr {
  constructor($http) {
    this.$http = $http;
    this.url = 'https://api.flickr.com/services/rest/';

    this.flickrSearchParams = {
      api_key: '5213fb4cc01e4dc3fb7dbc8be2cb26f7',
      method: 'flickr.photos.search',
      per_page: 1,
      format: 'json',
      nojsoncallback: 1
    };
  }

  getPhoto(hashtag) {
    const params = angular.extend(this.flickrSearchParams, {text: hashtag});

    return this.$http
      .get(this.url, {params})
      .then(response => {
        if (response.data.photos && response.data.photos.photo.length) {
          const photo = response.data.photos.photo[0];
          return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        }
      });
  }
}

angular
  .module(flickrModule, [])
  .service('flickr', Flickr);
