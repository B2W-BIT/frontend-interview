import angular from 'angular';
import 'angular-mocks';
import {profileNavbar} from './profile-navbar';

const user = {};

describe('profile-navbar component', () => {
  beforeEach(() => {
    angular
      .module('profileNavbar', ['app/profile-navbar/profile-navbar.html'])
      .component('profileNavbar', profileNavbar);
    angular.mock.module('profileNavbar');
    angular.mock.module('twitter');
  });

  it('should render profile-navbar', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'http://localhost:8000/user/americanascom').respond(user);
    const element = $compile('<profile-navbar></profile-navbar>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.profile-navbar');
    expect(result.length).toEqual(1);
  }));
});
