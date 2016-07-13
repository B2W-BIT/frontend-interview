import angular from 'angular';
import uiRouter from 'angular-ui-router';
import timelineComponent from './timeline.component';

let timelineModule = angular.module('timeline', [
  uiRouter
])

.component('timeline', timelineComponent)
.name;

export default timelineModule;
