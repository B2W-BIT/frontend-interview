import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('appHeader', [])
      .component('appHeader', header);
    angular.mock.module('appHeader');
  });

  it('should render header title', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app-header></app-header>')($rootScope);
    $rootScope.$digest();
    const header = element[0].querySelectorAll('.header-title');
    expect(header.length).toEqual(1);
  }));
});
