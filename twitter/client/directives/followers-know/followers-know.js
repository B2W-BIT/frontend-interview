var app = angular.module('app.directives');

app.directive('followersKnow', function followersKnow() {

    return {
        restrict : 'E',
        template : [
            '<div class="col-md-3 profile-photos">',
            '   <img class="profile-photos-img" src="images/followers-know.png" />',
            '</div>'
        ].join('')
    };

});