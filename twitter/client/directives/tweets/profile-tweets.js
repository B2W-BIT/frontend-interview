var app = angular.module('app.directives');

app.directive('profileTweets', function profileTweets() {

    return {
        restrict : 'E',
        scope: {
            tweets: '=',
            tweetsHeaderOptions: '='
        },
        template : [
            '<section class="col-md-12 col-sm-12 col-xs-12 profile-tweets-container">',
            '   <header class="profile-tweets-header">',
            '       <tweets-header-option ng-repeat="headerOption in tweetsHeaderOptions" text="headerOption.text" active="headerOption.active" index="$index"></tweets-header-option>',
            '   </header>',
            '   <section>',
            '       <tweet ng-repeat="tweet in tweets track by $index" tweet="tweet"></tweet>',
            '   </section>',
            '   <div infinite-scroll="ctrl.moreTweets()" infinite-scroll-distance="0"></div>',
            '</section>'
        ].join(''),
        controller: function profileTweetsController($scope) {

            this.moreTweets = function moreTweets() {
                if (!$scope.tweets) return;
                $scope.$parent.ctrl.moreTweets();
            };

            this.selectTweetsHeaderOption = function selectTweetsHeaderOption(index) {
                $scope.$parent.ctrl.selectHeaderOptionsActive(index);
            };

        },
        controllerAs: 'ctrl'

    };

});