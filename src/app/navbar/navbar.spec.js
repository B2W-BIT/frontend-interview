import angular from 'angular';
import 'angular-mocks';
import {navbar} from './navbar';

describe('navbar component', () => {
  beforeEach(() => {
    angular
      .module('navbar', ['app/navbar/navbar.html'])
      .component('appNavbar', navbar);
    angular.mock.module('navbar');
  });

  it('should render twitter logo', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app-navbar></app-navbar>')($rootScope);
    $rootScope.$digest();
    expect(element.find('.twitter').length).toEqual(1);
  }));
});
