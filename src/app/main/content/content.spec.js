import angular from 'angular';
import 'angular-mocks';
import {content} from './content';

describe('content component', () => {
  beforeEach(() => {
    angular
      .module('content', ['app/main/content/content.html'])
      .component('appContent', content);
    angular.mock.module('content');
  });

  it('should render the content', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app-content></app-content>')($rootScope);
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.content');
    expect(result.length).toEqual(1);
  }));
});
