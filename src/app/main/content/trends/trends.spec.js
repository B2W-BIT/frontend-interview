import angular from 'angular';
import 'angular-mocks';
import {trends} from './trends';

describe('trends component', () => {
  beforeEach(() => {
    angular
      .module('trends', ['app/main/content/trends/trends.html'])
      .component('trends', trends);
    angular.mock.module('trends');
  });

  it('should render the trends', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<trends></trends>')($rootScope);
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.trends');
    expect(result.length).toEqual(1);
  }));
});
