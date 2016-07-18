describe('Home', function() {

    var response = {"data":[{"id":35019751,"id_str":"35019751","name":"americanas.com","screen_name":"americanascom","location":"Brasil","description":"Bem-vindo ao Twitter oficial da http://t.co/vFpTBXqZ! Um espaço especial para aproveitar ofertas exclusivas, promoções e ficar por dentro das nossas novidades.","url":"http://t.co/PfJKJTZmj1","entities":{"url":{"urls":[{"url":"http://t.co/PfJKJTZmj1","expanded_url":"http://www.americanas.com","display_url":"americanas.com","indices":[0,22]}]},"description":{"urls":[{"url":"http://t.co/vFpTBXqZ","expanded_url":"http://Americanas.com","display_url":"Americanas.com","indices":[32,52]}]}},"protected":false,"followers_count":232894,"friends_count":897,"listed_count":2568,"created_at":"Fri Apr 24 19:51:14 +0000 2009","favourites_count":20,"utc_offset":-10800,"time_zone":"Brasilia","geo_enabled":false,"verified":true,"statuses_count":20422,"lang":"en","status":{"created_at":"Sat Jul 16 15:40:38 +0000 2016","id":754339972220674000,"id_str":"754339972220674052","text":"@paulovieirah, o que aconteceu?","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[{"screen_name":"paulovieirah","name":"Paulo Vieira","id":59142325,"id_str":"59142325","indices":[0,13]}],"urls":[]},"source":"<a href=\"http://www.scup.com\" rel=\"nofollow\">Scup</a>","in_reply_to_status_id":754318346120749000,"in_reply_to_status_id_str":"754318346120749056","in_reply_to_user_id":59142325,"in_reply_to_user_id_str":"59142325","in_reply_to_screen_name":"paulovieirah","geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"lang":"pt"},"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"E60014","profile_background_image_url":"http://pbs.twimg.com/profile_background_images/754180801/ea96f827e4c0f1f5f368dff6bc1f545e.gif","profile_background_image_url_https":"https://pbs.twimg.com/profile_background_images/754180801/ea96f827e4c0f1f5f368dff6bc1f545e.gif","profile_background_tile":true,"profile_image_url":"http://pbs.twimg.com/profile_images/729657533942669312/lt9PJ4c3_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/729657533942669312/lt9PJ4c3_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/35019751/1462798863","profile_link_color":"A8A1A2","profile_sidebar_border_color":"FFFFFF","profile_sidebar_fill_color":"F5FDFF","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":false,"default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null}]};

    beforeEach(module('app.homeController'));

    var scope, httpBackend, http, controller;

    beforeEach(inject(function ($rootScope, $controller, $httpBackend, $http) {

        scope = $rootScope.$new();
        http = $http;
        controller = $controller('ProfileLookupCtrl', {
            $scope: scope,
            $http: http
        });
        httpBackend = $httpBackend;
        httpBackend.whenGET('getProfileLookup').respond(200, response);
    }));

    it('should make a http GET request and fill data', function () {

        expect(httpBackend.flush).not.toThrow();

        expect(scope.name).toBe('americanas.com');
        expect(scope.profile_banner).toBe('https://pbs.twimg.com/profile_banners/35019751/1462798863');
        expect(scope.profile_picture).toBe('http://pbs.twimg.com/profile_images/729657533942669312/lt9PJ4c3.jpg');
        expect(scope.screen_name).toBe('@americanascom');
        expect(scope.description).toBe(
            'Bem-vindo ao Twitter oficial da <a href="http://t.co/vFpTBXqZ" ' +
            'target="_blank">Americanas.com</a>! Um espaço especial para aproveitar ' +
            'ofertas exclusivas, promoções e ficar por dentro das nossas novidades.'
        );
        expect(scope.location).toBe('Brasil');
        expect(scope.display_url).toBe('americanas.com');
        expect(scope.expanded_url).toBe('http://www.americanas.com');
        expect(scope.created_at).toBe('abril 2009');
        expect(scope.total_following).toBe(897);
        expect(scope.total_followers).toBe(232894);
    });
});
