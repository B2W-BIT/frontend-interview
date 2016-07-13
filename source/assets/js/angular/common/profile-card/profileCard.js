import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileCardComponent from './profileCard.component';

let profileCardModule = angular.module('profileCard', [
  uiRouter
])

.component('profileCard', profileCardComponent)
.name;

export default profileCardModule;
