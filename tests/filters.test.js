describe('Filters', function() {

    beforeEach(module('app.filters'));

    describe('toDate', function() {

        var toDate;

        beforeEach(inject(function($filter) {

            toDate = $filter('toDate', {});
        }));

        it('should format date', function() {

            expect(toDate('Wed Aug 27 13:08:45 +0000 2008')).toBe('27 de ago');
            expect(toDate('Mon Sep 22 00:54:22 +0000 2008')).toBe('22 de set');
            expect(toDate('Fri Oct 29 15:19:53 +0000 2013')).toBe('29 de out');
        });
    });

    describe('toMediaTweet', function() {

        var toMediaTweet;
        var inputImage = {
                            "entities": {
                                "media": [
                                    {
                                        "expanded_url": "https://random/big/image/url.jpg",
                                        "media_url_http": "http://url/image.jpg",
                                        "media_url_https": "https://url/image.jpg",
                                        "url": "http://url"
                                    }
                                ]
                            },
                            "text": "Image: http://url"
                        };
        var inputLink = {
                            "entities": {
                                "urls": [
                                    {
                                        "expanded_url": "https://random/url",
                                        "url": "https://url",
                                        "display_url": "display-url.com"
                                    }
                                ]
                            },
                            "text": "Text with link: https://url"
                        };

        beforeEach(inject(function($filter) {

            toMediaTweet = $filter('toMediaTweet', {});
        }));

        it('should format images and links in tweet text', function() {

            expect(toMediaTweet(inputImage)).toBe(
                'Image: <a class="tweet-media" href="https://random/big/image/url.jpg" target="_blank">' +
                '<img src="https://url/image.jpg"></a>'
            );

            expect(toMediaTweet(inputLink)).toBe(
                'Text with link: <a href="https://url" target="_blank">display-url.com</a>'
            );
        });
    });
});
