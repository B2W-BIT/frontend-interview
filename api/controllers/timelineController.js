const https = require('https')

let timelineController = {
  get(req, res, next) {
    const options = {
      hostname: 'api.twitter.com',
      port: 443,
      path: '/1.1/statuses/user_timeline.json?screen_name=americanascom&count=20',
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

export default timelineController;
