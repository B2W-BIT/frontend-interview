import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profilePhotosVideosComponent from './profilePhotosVideos.component';

let profilePhotosVideosModule = angular.module('profilePhotosVideos', [
  uiRouter
])

.component('profilePhotosVideos', profilePhotosVideosComponent)
.name;

export default profilePhotosVideosModule;
