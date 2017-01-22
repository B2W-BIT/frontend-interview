var app = angular.module('app.directives');

app.directive('profileFollowersKnow', function profileFollowersKnow() {

    return {
        restrict : 'E',
        scope: {},
        template : [
            '<section class="profile-photos-container">',
            '   <header class="profile-photos-header">',
            '       <span><i class="fa fa-user" aria-hidden="true"></i> {{ ctrl.followers.length }} Followers you know</span>',
            '   </header>',
            '   <section>',
            '       <followers-know ng-repeat="follow in ctrl.followers track by $index"></followers-know>',
            '   </section>',
            '</section>'
        ].join(''),
        controllerAs: 'ctrl',
        controller: function profileFollowersKnowController(helpService) {

            this.followers = new Array(helpService.random(16));

        }
    };

});