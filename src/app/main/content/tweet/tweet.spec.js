import angular from 'angular';
import 'angular-mocks';
import {tweet} from './tweet';

describe('tweet component', () => {
  beforeEach(() => {
    angular
      .module('tweet', ['app/main/content/tweet/tweet.html'])
      .component('tweet', tweet);
    angular.mock.module('tweet');
    angular.mock.module('flickr');
  });

  it('should render the tweet', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.fixture = {
      entities: []
    };

    const element = $compile('<tweet tweet="fixture"></tweet>')($scope);
    $scope.$digest();
    const result = element[0].querySelectorAll('.tweet');
    expect(result.length).toEqual(1);
  }));
});
