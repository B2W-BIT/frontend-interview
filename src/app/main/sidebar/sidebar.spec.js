import angular from 'angular';
import 'angular-mocks';
import {sidebar} from './sidebar';

const user = {};

describe('sidebar component', () => {
  beforeEach(() => {
    angular
      .module('sidebar', ['app/main/sidebar/sidebar.html'])
      .component('appSidebar', sidebar);
    angular.mock.module('sidebar');
    angular.mock.module('twitter');
  });

  it('should render the sidebar', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    $httpBackend.when('GET', 'http://localhost:8000/user/americanascom').respond(user);
    const element = $compile('<app-sidebar></app-sidebar>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.sidebar');
    expect(result.length).toEqual(1);
  }));
});
