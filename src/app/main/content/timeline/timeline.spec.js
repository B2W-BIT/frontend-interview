import angular from 'angular';
import 'angular-mocks';
import {timeline} from './timeline';

const tweets = {};

describe('timeline component', () => {
  beforeEach(() => {
    angular
      .module('timeline', ['app/main/content/timeline/timeline.html'])
      .component('timeline', timeline);
    angular.mock.module('timeline');
    angular.mock.module('twitter');
  });

  it('should render the timeline', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    const tweetsUrl = 'http://localhost:8000/user/americanascom/timeline?count=20&exclude_replies=false';
    $httpBackend.when('GET', tweetsUrl).respond(tweets);
    const element = $compile('<timeline></timeline>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.timeline');
    expect(result.length).toEqual(1);
  }));
});
