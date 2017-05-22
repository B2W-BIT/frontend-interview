(function(){
  var request = new XMLHttpRequest(),
      url = 'mocks/profile.json';
      
  request.open('GET', url, true);
  
  request.addEventListener('load', function(){
    if (request.status >= 200 && request.status < 400) {
      var datas = JSON.parse(request.responseText);
      
      datas.forEach(function(data){
        var profileBanner = document.getElementById('profile-banner');
        profileBanner.style.backgroundImage = 'url(' + data.photoCover + ')';
        
        var profileAvatar = document.querySelector('#profile-avatar img');
        profileAvatar.setAttribute('src', data.photoProfile);
        profileAvatar.setAttribute('alt', data.name);
        
        var profile = document.getElementById('profile');        
        var profileCard = document.createElement('div');        
        var profileHtml =        
          '<div class="profile-sidebar-name">\n'+
            data.name + ' <span class="icon icon-verified"></span><br>\n'+
            '<a href="https://twitter.com/'+ data.name +'" title="">'+ data.screenName +'</a>\n'+
          '</div>\n'+

          '<p class="profile-sidebar-desc">'+ data.description +'</p>\n'+

          '<ul class="profile-sidebar-info">\n'+
            '<li><span class="icon icon-geo"></span> '+ data.location +'</li>\n'+
            '<li><span class="icon icon-url"></span> <a href="'+ data.site +'" title="" target="_blank">'+ data.site +'</a></li>\n'+
            '<li><span class="icon icon-calendar"></span> '+ data.joinDate +'</li>\n'+
          '</ul>\n'+

          '<button class="btn btn-primary btn-icon btn-tweet btn-block">\n'+
            '<span class="icon icon-tweet"></span> \n'+
            '<span class="text">Tweet to '+ data.name +'</span>\n'+
          '</button>';        
          
        addClass(profileCard, 'profile-card');        
        profileCard.innerHTML = profileHtml;
        profile.appendChild(profileCard);
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