(function(){
  var request = new XMLHttpRequest(),
      url = 'mocks/followers.json';
      
  request.open('GET', url, true);
  
  request.addEventListener('load', function(){
    if (request.status >= 200 && request.status < 400) {
      var datas = JSON.parse(request.responseText);
      
      var followersCounter = document.getElementById('followers-counter');
      followersCounter.innerText = abbreviateCounter(datas.length);
      
      datas.forEach(function(data){
        var followersList = document.getElementById('followers-list');
        var followersItem = document.createElement('li');
        var followersHtml = 
          '<a href="'+ data.url +'" title="'+ data.profile +'">\n'+
            '<img src="'+ data.avatar +'" alt="'+ data.profile +'">\n'+
          '</a>';
          
        followersItem.innerHTML = followersHtml;
        followersList.appendChild(followersItem);
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