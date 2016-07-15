angular.module('app.timelineService', ['toaster'])

.factory('timelineService', function($http, toaster) {

    var timelineService = function(type) {
        this.items = [];
        this.busy = false;
        this.lastCursor = '';
        switch (type) {
            case 'following':
                this.url = 'getFollowing?cursor=';
                break;
            case 'followers':
                this.url = 'getFollowers?cursor=';
                break;
            case 'tweets':
                this.url = 'getTweets?max_id=';
                break;
            case 'tweets-replies':
                this.url = 'getTweetsReplies?max_id=';
                break;
            case 'media':
                this.url = 'getMedia?max_id=';
                break;
            case 'likes':
                this.url = 'getLikes?max_id=';
                break;
            default:
                this.url = 'getTimeline?max_id=';
                break;
        }
        this.type = type;
        this.stop = false;
    };

    timelineService.prototype.nextPage = function() {
        if (this.busy || this.stop) return;
        this.busy = true;

        $http.get(this.url + this.lastCursor).success(function(response) {
            if(typeof response.data.allErrors !== 'undefined') {
                toaster.pop({
                        type: 'error',
                        title: "Twitter API erro " + response.data.allErrors[0].code,
                        body: response.data.allErrors[0].message,
                        showCloseButton: true,
                        timeout: 4500
                    });
            }
            else if(typeof response.data.errors !== 'undefined') {
                toaster.pop({
                        type: 'error',
                        title: "Twitter API erro " + response.data.errors[0].code,
                        body: response.data.errors[0].message,
                        showCloseButton: true,
                        timeout: 4500
                    });
            }
            else {
                var items = [];
                var start = 0;

                switch (this.type) {
                    case 'tweets':
                    case 'tweets-replies':
                    case 'media':
                    case 'likes':
                        //Stops pagination if result length is 1 (last item) or 0
                        if(response.data.length <= 1) {
                            this.stop = true;
                            this.busy = false;
                            return;
                        }
                        items = response.data;
                        start = this.lastCursor == items[0].id_str ? 1 : 0;
                        this.lastCursor = items[items.length - 1].id_str;
                        break;
                    default:
                        //Following and Followers
                        items = response.data.users;
                        this.lastCursor = response.data.next_cursor_str;
                        break;
                }

                for (var i = start; i < items.length; i++) {
                    if(this.type == 'tweets' || this.type == 'tweets-replies') {
                        //If tweets, insert flickr images on posts with hashtag
                        items[i] = insertHashtagImage($http, items[i], toaster);
                    }
                    if(this.type == 'media') {
                        if(typeof items[i].entities.media !== 'undefined') {
                            this.items.push(items[i]);
                        }
                    }
                    else {
                        this.items.push(items[i]);
                    }
                }

                this.busy = false;
            }
        }.bind(this));
    };

    function insertHashtagImage($http, item, toaster) {
        //Check if there is any hashtag in text, sometimes entities.hashtags comes empty...
        if(item.text.indexOf('#') !== -1) {
            var hashtags = item.text.match(/#\S+/g);
            //Push only the first hashtag
            var hashtag = {text: hashtags[0].substring(1)};
            item.entities.hashtags.push(hashtag);
            //Check if there is no media attached already
            if(typeof item.entities.media === 'undefined') {
                getFlickrImage($http, hashtag.text, item, toaster);
            }
        }

        return item;
    }

    function getFlickrImage($http, hashtag, item, toaster) {
        //Put space before capital letters if hashtag number of characters is greater than 6
        hashtag = hashtag.length > 6 ? hashtag.replace(/([A-Z])/g, ' $1').trim() : hashtag;
        $http.get('getFlickrImage?hashtag=' + hashtag).success(function(response) {
            if(typeof response.data.error !== 'undefined') {
                toaster.pop({
                        type: 'warning',
                        title: "Flickr API erro " + response.data.error.code,
                        body: response.data.error.message,
                        showCloseButton: true,
                        timeout: 4500
                    });
                return null;
            }

            var flickrImage = response.data;

            setFlickrMedia(flickrImage, item);
        });
    }

    function setFlickrMedia(flickrImage, item) {

        if(flickrImage !== null && flickrImage.total > 0) {
            var randomIndex = Math.floor((Math.random() * flickrImage.photo.length));
            var imageUrl = '{image}';
            var expanded_url = "https://www.flickr.com/photos/{user-id}/{photo-id}";
            var media_url = "https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_c.jpg";

            expanded_url = expanded_url.replace('{user-id}', flickrImage.photo[randomIndex].owner);
            expanded_url = expanded_url.replace('{photo-id}', flickrImage.photo[randomIndex].id);
            media_url = media_url.replace('{farm-id}', flickrImage.photo[randomIndex].farm);
            media_url = media_url.replace('{server-id}', flickrImage.photo[randomIndex].server);
            media_url = media_url.replace('{id}', flickrImage.photo[randomIndex].id);
            media_url = media_url.replace('{secret}', flickrImage.photo[randomIndex].secret);

            var media = {
                expanded_url: expanded_url,
                media_url_https: media_url,
                url: imageUrl
            };

            item.text += imageUrl;
            item.entities.media = [];
            item.entities.media.push(media);
        }
    }

    return timelineService;
});
