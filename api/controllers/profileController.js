const https = require('https')

let profileController = {
  get(req, res, next) {
    const options = {
      hostname: 'api.twitter.com',
      port: 443,
      path: '/1.1/users/show.json?screen_name=americanascom',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANlPwQAAAAAAacv8mwexmkeIYPvmQN89jBHB0nc%3DsvfJ3AC5goXNRRj7Ku8rbuh5qtDT8Fx7YgV0Q12SYqmviHekYA'
      }
    };

    var req = https.request(options, (apiRes) => {
      var body = '';

      apiRes.on('data', function(chunk){
          body += chunk;
      });

      apiRes.on('end', function(){
          res.json(JSON.parse(body));
      });
    });

    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });

    req.end();
  }
};

export default profileController;
