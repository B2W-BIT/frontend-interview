import angular from 'angular';
import 'angular-mocks';
import {tweet} from './tweet';

const user = {};

describe('tweet component', () => {
  beforeEach(() => {
    angular
      .module('tweet', ['app/main/content/tweet/tweet.html'])
      .component('tweet', tweet);
    angular.mock.module('tweet');
    angular.mock.module('twitter');
  });

  it('should render the tweet', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'http://localhost:8000/user/americanascom').respond(user);
    const element = $compile('<tweet></tweet>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.tweet');
    expect(result.length).toEqual(1);
  }));
});
