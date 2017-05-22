(function(){
  var request = new XMLHttpRequest(),
      url = 'mocks/counters.json';
      
  request.open('GET', url, true);
  
  request.addEventListener('load', function(){
    if (request.status >= 200 && request.status < 400) {
      var datas = JSON.parse(request.responseText);
      
      datas.forEach(function(data){
        var profileTweets = document.getElementById('profile-tweets');
        var profileFollowing = document.getElementById('profile-following');
        var profileFollowers = document.getElementById('profile-followers');
        var profileLikes = document.getElementById('profile-likes');
        
        profileTweets.innerText = abbreviateCounter(data.counters.tweets);
        profileFollowing.innerText = abbreviateCounter(data.counters.following);
        profileFollowers.innerText = abbreviateCounter(data.counters.followers);
        profileLikes.innerText = abbreviateCounter(data.counters.likes);
      });      
    } else {
      console.log('The server returned an error: ' + request.status);
    }
  });
  
  request.onerror = function() {
    console.log('There was a connection error.');
  };
  
  request.send();  
})();  