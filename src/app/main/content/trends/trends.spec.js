import angular from 'angular';
import 'angular-mocks';
import {trends} from './trends';

const trendsResponse = [
  {
    trends: [
      {
        name: '#DepoisDas11NoTeatro',
        url: 'http://twitter.com/search?q=%23DepoisDas11NoTeatro',
        promoted_content: null,
        query: '%23DepoisDas11NoTeatro',
        tweet_volume: 72044
      }
    ]
  }
];

describe('trends component', () => {
  beforeEach(() => {
    angular
      .module('trends', ['app/main/content/trends/trends.html'])
      .component('trends', trends);
    angular.mock.module('trends');
    angular.mock.module('twitter');
  });

  it('should render the trends', angular.mock.inject(($rootScope, $compile, $httpBackend) => {
    const trendsUrl = 'http://localhost:8000/trends';
    $httpBackend.when('GET', trendsUrl).respond(trendsResponse);
    const element = $compile('<trends></trends>')($rootScope);
    $httpBackend.flush();
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.trends');
    expect(result.length).toEqual(1);
  }));
});
