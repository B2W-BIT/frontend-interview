import angular from 'angular';
import 'angular-mocks';
import {followers} from './followers';

const user = {
  created_at: new Date()
};

describe('followers component', () => {
  beforeEach(() => {
    angular
      .module('followers', ['app/main/sidebar/followers/followers.html'])
      .component('followers', followers);
    angular.mock.module('followers');
    angular.mock.module('twitter');
  });

  it('should render the followers', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'http://localhost:8000/user/americanascom').respond(user);
    const element = $compile('<followers></followers>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.followers');
    expect(result.length).toEqual(1);
  }));
});
