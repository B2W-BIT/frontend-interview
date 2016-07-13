import angular from 'angular';
import uiRouter from 'angular-ui-router';
import widgetSuggestionsComponent from './widgetSuggestions.component';

let widgetSuggestionsModule = angular.module('widgetSuggestions', [
  uiRouter
])

.component('widgetSuggestions', widgetSuggestionsComponent)
.name;

export default widgetSuggestionsModule;
