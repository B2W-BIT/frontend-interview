import * as twitterApi from '../lib/twitter-api';

describe('Twitter Api', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('should get user data from twitter', done => {
    const screenName = 'americanascom';

    twitterApi.getUser(screenName)
    .then(result => {
      expect(result.screen_name).toEqual(screenName);
      done();
    })
    .catch(error => {
      console.log('error', error);
      done();
    });
  });
});
