var app = angular.module('app.directives');

app.directive('profilePhotosVideos', function profilePhotosVideos() {

    return {
        restrict : 'E',
        scope: {},
        template : [
            '<section class="profile-photos-container">',
            '   <header class="profile-photos-header">',
            '       <span><i class="fa fa-camera" aria-hidden="true"></i> {{ ctrl.photos.length }} photos and videos</span>',
            '   </header>',
            '   <section>',
            '       <photos-videos ng-repeat="photo in ctrl.photos track by $index"></photos-videos>',
            '   </section>',
            '</section>'
        ].join(''),
        controllerAs: 'ctrl',
        controller: function profilePhotosVideosController(helpService) {

            this.photos = new Array(helpService.random(9));

        }
    };

});