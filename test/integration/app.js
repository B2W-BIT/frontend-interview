describe('Route Books', () => {
  describe('Profile information', () => {
    describe('Route GET /twitter/user', () => {
      it('should return profile data', (done) => {
        request
          .get('/twitter/user')
          .end((err, res) => {
            expect(res.body).to.be.an('object');
            expect(res.body.screen_name).to.be.eql('americanascom');
            expect(res.body.description).to.be.exist;

            done(err);
          });
      });

      it('should return the url of the bigger profile image', (done) => {
        request
          .get('/twitter/user')
          .end((err, res) => {
            expect(res.body.profile_image_url_bigger).to.be.a('string');

            done(err);
          });
      });

      it('should return the formated created at date', (done) => {
        request
          .get('/twitter/user')
          .end((err, res) => {
            expect(res.body.created_at_formated).to.be.eql('April 2009');

            done(err);
          });
      });
    });
  });

  describe('Tweets', () => {
    describe('Route GET /twitter/tweets', () => {
      it('should return a list with ten tweets', (done) => {
        request
          .get('/twitter/tweets')
          .end((err, res) => {
            expect(res.body.length).to.be.eql(10);

            done(err);
          });
      });

      it('should return a list of tweets from americanas.com', (done) => {
        request
          .get('/twitter/tweets')
          .end((err, res) => {
            expect(res.body[0].user.screen_name).to.be.eql('americanascom');

            done(err);
          });
      });
    });
  });

});