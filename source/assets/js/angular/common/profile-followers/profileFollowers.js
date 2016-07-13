import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileFollowersComponent from './profileFollowers.component';

let profileFollowersModule = angular.module('profileFollowers', [
  uiRouter
])

.component('profileFollowers', profileFollowersComponent)
.name;

export default profileFollowersModule;
