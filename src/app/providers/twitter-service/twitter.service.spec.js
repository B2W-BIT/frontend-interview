
describe('service githubService', () => {
  beforeEach(angular.mock.module('frontEndTrabalheNaMad'));

  it('should be registered', inject(githubService => {
    expect(githubService).not.toEqual(null);
  }));

  describe('apiHost variable', () => {
    it('should exist', inject(githubService => {
      expect(githubService.apiHost).not.toEqual(null);
    }));
  });

  describe('getDevelopers function', () => {
    it('should exist', inject(githubService => {
      expect(githubService.getDevelopers).not.toEqual(null);
    }));

    it('should return data', inject((githubService, $httpBackend) => {
      $httpBackend.when('GET',  githubService.apiHost + '/users?per_page=1').respond(200, [{pprt: 'value'}]);
      var data;
      githubService.getDevelopers(1).then(function(fetchedData) {
        data = fetchedData;
      });
      $httpBackend.flush();
      expect(data).toEqual(jasmine.any(Array));
      expect(data.length === 1).toBeTruthy();
      expect(data[0]).toEqual(jasmine.any(Object));
    }));

    it('should define a limit per page as default value', inject((githubService, $httpBackend) => {
      $httpBackend.when('GET',  githubService.apiHost + '/users?per_page=30').respond(200, new Array(30));
      var data;
      githubService.getDevelopers().then(function(fetchedData) {
        data = fetchedData;
      });
      $httpBackend.flush();
      expect(data).toEqual(jasmine.any(Array));
      expect(data.length === 30).toBeTruthy();
    }));

    it('should log a error', inject((githubService, $httpBackend, $log) => {
      $httpBackend.when('GET',  githubService.apiHost + '/users?per_page=1').respond(500);
      githubService.getDevelopers(1);
      $httpBackend.flush();
      expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
    }));
  });
});
