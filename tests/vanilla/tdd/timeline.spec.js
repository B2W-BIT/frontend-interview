/** @test {Timeline} */
describe('TDD - Timeline', () => {
  // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
  describe('Only tweets in the return', () => {
    before( () => {
      global.initialAmount = 5;
      global.API = {};
      global.API.valid = ['tweet', 'tweet', 'tweet', 'reply', 'reply', 'tweet', 'tweet', 'tweet', 'reply', 'reply'];
      global.API.invalid = ['tweet', 'tweet', 'tweet', 'reply', 'reply'];
      global.request = (API) => {
        let tweets = [];
        API.forEach( (element, index) => {
          if(element === 'tweet'){
            tweets.push(element);
          }
        });

        return tweets;
      }
    });

    it('Sufficient return', () => {
      let valid = request(API.valid);
      assert.operator(initialAmount, '<=', valid.length, 'valid amount');
    });

    it('Sufficient return, but return only necessary', () => {
      let valid = request(API.valid);
      let necessary = [];

      for (let i = 0; i < initialAmount; i++) {
        necessary.push(valid[i]);
      }

      assert.operator(initialAmount, '===', necessary.length, 'necessary amount');
    });

    it('Insufficient return', () => {
      let invalid = request(API.invalid);
      assert.operator(initialAmount, '>', invalid.length, 'invalid amount');
    });

    it('Complete insufficient return', () => {
      let invalid = request(API.invalid);
      let wantage = initialAmount - invalid.length;
      let len = (API.invalid < wantage) ? API.invalid : wantage;
      let valid = invalid;
      let moreTweets;

      //A new request to complete
      moreTweets = request(API.invalid);

      for (let i = 0; i < len; i++) {
        valid.push(moreTweets[i]);
      }

      assert.operator(2, '===', wantage, 'wantage');
      assert.operator(initialAmount, '===', valid.length, 'complete');
    });
  });
});
