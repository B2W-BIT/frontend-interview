import angular from 'angular';
import uiRouter from 'angular-ui-router';
import widgetTrendsComponent from './widgetTrends.component';

let widgetTrendsModule = angular.module('widgetTrends', [
  uiRouter
])

.component('widgetTrends', widgetTrendsComponent)
.name;

export default widgetTrendsModule;
