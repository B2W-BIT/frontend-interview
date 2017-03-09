import angular from 'angular';
import 'angular-mocks';
import {sidebar} from './sidebar';

describe('sidebar component', () => {
  beforeEach(() => {
    angular
      .module('sidebar', ['app/sidebar/sidebar.html'])
      .component('appSidebar', sidebar);
    angular.mock.module('sidebar');
  });

  it('should render the sidebar', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app-sidebar></app-sidebar>')($rootScope);
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.sidebar');
    expect(result.length).toEqual(1);
  }));
});
