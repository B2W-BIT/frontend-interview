import angular from 'angular';
import TwitterService from './twitter.service';

let twitterModule = angular.module('twitterAPI', [])

.service('twitterAPI', TwitterService)
.name;

export default twitterModule;
