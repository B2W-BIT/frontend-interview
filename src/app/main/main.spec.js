import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/main/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the sidebar and content', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('app-sidebar').length).toEqual(1);
    expect(element.find('app-content').length).toEqual(1);
  }));
});
