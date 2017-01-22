var app = angular.module('app.directives');

app.directive('photosVideos', function photosVideos() {

    return {
        restrict : 'E',
        template : [
            '<div class="col-md-4 profile-photos">',
            '   <img class="profile-photos-img" src="images/photo-and-videos.jpg" />',
            '</div>'
        ].join('')
    };

});