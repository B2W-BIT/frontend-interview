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
    const result = element[0].querySelectorAll('.twitter-logo');
    expect(result.length).toEqual(1);
  }));

  describe('left navbar', () => {
    it('should render left navbar', angular.mock.inject(($rootScope, $compile) => {
      const element = $compile('<app-navbar></app-navbar>')($rootScope);
      $rootScope.$digest();

      const navbarLeft = element[0].querySelectorAll('.navbar-left');
      expect(navbarLeft.length).toEqual(1);
    }));

    it('should render left navbar items', angular.mock.inject(($rootScope, $compile) => {
      const element = $compile('<app-navbar></app-navbar>')($rootScope);
      $rootScope.$digest();

      const navbarLeft = element[0].querySelectorAll('.navbar-left');
      expect(angular.element(navbarLeft).children().length).toEqual(4);
    }));
  });

  describe('right navbar', () => {
    it('should render right navbar elements', angular.mock.inject(($rootScope, $compile) => {
      const element = $compile('<app-navbar></app-navbar>')($rootScope);
      $rootScope.$digest();

      const navbarRight = element[0].querySelectorAll('.navbar-right');
      expect(navbarRight.length).toEqual(2);
    }));

    it('should render right navbar search form', angular.mock.inject(($rootScope, $compile) => {
      const element = $compile('<app-navbar></app-navbar>')($rootScope);
      $rootScope.$digest();

      const searchForm = element[0].querySelectorAll('form.navbar-right');
      expect(searchForm.length).toEqual(1);
    }));

    it('should render right navbar items', angular.mock.inject(($rootScope, $compile) => {
      const element = $compile('<app-navbar></app-navbar>')($rootScope);
      $rootScope.$digest();

      const navbarRight = element[0].querySelectorAll('.navbar-right');
      const wrappedNavbarRight = angular.element(navbarRight);

      const profilePicture = wrappedNavbarRight.find('img');
      const tweetButton = wrappedNavbarRight.find('button');

      expect(profilePicture.length).toEqual(1);
      expect(tweetButton.find('span').html().trim()).toEqual('Tweet');
    }));
  });
});
