var app = angular.module('app.directives');

app.directive('tweet', function tweet() {

    return {
        restrict : 'E',
        scope: {
            tweet: '='
        },
        template : [
            '<article class="tweet-container col-md-12 col-sm-12 col-xs-12">',
            '   <aside class="col-md-2 col-sm-2 tweet-img-container hidden-xs">',
            '       <img class="tweet-img" ng-src="{{ tweet.user.profile_image_url }}" />',
            '   </aside>',
            '   <main class="col-md-10 col-sm-10 col-xs-10 tweet-main-container">',
            '       <div class="row tweet-main-reply" ng-if="tweet.entities.user_mentions.length">',
            '           <span><i class="fa fa-reply hidden-xs icon-reply" aria-hidden="true"></i>In reply to {{ tweet.entities.user_mentions[0].name }}</span>',
            '       </div>',
            '       <div class="row tweet-main-profile-container">',
            '           <span class="tweet-main-profile-name">{{ tweet.user.name }}</span>',
            '           <span class="tweet-main-profile-at">{{ tweet.user.screen_name | screenName }}</span>',
            '       </div>',
            '       <div class="row tweet-main">',
            '           <span>{{ tweet.text }}</span>',
            '       </div>',
            '       <tweet-image tweet="tweet"></tweet-image>',
            '       <div class="row tweet-main-icons">',
            '           <tweet-icon icon="fa-reply" value="tweet.entities.user_mentions.length"></tweet-icon>',
            '           <tweet-icon icon="fa-retweet" value="tweet.retweet_count"></tweet-icon>',
            '           <tweet-icon icon="fa-heart" value="tweet.favorite_count"></tweet-icon>',
            '           <tweet-icon icon="fa-ellipsis-h"></tweet-icon>',
            '       </div>',
            '   </main>',
            '</article>'
        ].join('')
    };

});