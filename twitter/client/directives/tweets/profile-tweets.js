var app = angular.module('app.directives');

app.directive('profileTweets', function profileTweets() {

    return {
        restrict : 'E',
        scope: {
            tweets: '='
        },
        template : [
            '<section class="col-md-12 col-sm-12 col-xs-12 profile-tweets-container">',
            '   <header class="profile-tweets-header">',
            '       <tweets-header-option text="Tweets"></tweets-header-option>',
            '       <tweets-header-option text="Tweets & replies" active="true"></tweets-header-option>',
            '       <tweets-header-option text="Media"></tweets-header-option>',
            '   </header>',
            '   <section class="col-md-12 col-sm-12 col-xs-12">',
            '       <tweet ng-repeat="tweet in tweets track by $index" tweet="tweet"></tweet>',
            '   </section>',
            '   <div infinite-scroll="moreTweets()" infinite-scroll-distance="0"></div>',
            '</section>'
        ].join(''),
        link: function link(scope) {

            scope.moreTweets = function moreTweets() {
                if (!scope.tweets) return;
                scope.$parent.ctrl.moreTweets();
            };

        }
    };

});