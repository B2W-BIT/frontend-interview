import angular from 'angular';
import 'angular-mocks';
import {profileNavbar} from './profile-navbar';

describe('profile-navbar component', () => {
  beforeEach(() => {
    angular
      .module('profileNavbar', ['app/profile-navbar/profile-navbar.html'])
      .component('profileNavbar', profileNavbar);
    angular.mock.module('profileNavbar');
  });

  it('should render profile-navbar', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<profile-navbar></profile-navbar>')($rootScope);
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.profile-navbar');
    expect(result.length).toEqual(1);
  }));
});
