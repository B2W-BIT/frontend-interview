import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

const user = {
  profile_image_url: ''
};

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('appHeader', [])
      .component('appHeader', header);
    angular.mock.module('appHeader');
    angular.mock.module('twitter');
  });

  it('should render header title', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'http://localhost:8000/user/americanascom').respond(user);
    const element = $compile('<app-header></app-header>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const header = element[0].querySelectorAll('.header-title');
    expect(header.length).toEqual(1);
  }));
});
