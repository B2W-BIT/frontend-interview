/* globals angular:false */

var services;
services = angular.module('app.services');

services.factory('FlickrService', function FlickrService($resource, FLICKR_API, FLICKR_KEY) {
    return $resource(FLICKR_API, {}, {
        photos: {
            method: 'GET',
            url: FLICKR_API,
            isArray: false,
            params: {
                method: 'flickr.photos.search',
                api_key: FLICKR_KEY,
                page: 1,
                format: 'json',
                nojsoncallback: 1,
                per_page: 1
            }
        }
    });
});

services.factory('flickr', function flickr(FlickrService) {
    return {
        getPhotos: function getPhotos(tags) {
            return FlickrService.photos({ tags: tags }).$promise;
        },
        getPhotoUrl: function getPhotoUrl(photo) {
            return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg';
        }
    }
});