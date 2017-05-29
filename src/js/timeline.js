(function(){  
  var request = new XMLHttpRequest(),
      url = 'mocks/timeline.json';
      
  request.open('GET', url, true);
  
  request.addEventListener('load', function(){
    if (request.status >= 200 && request.status < 400) {
      var datas = JSON.parse(request.responseText).slice(0,9);
      
      datas.forEach(function(data){
        var tweetsList = document.getElementById('tweets-list');
        var tweetItem = document.createElement('li');
        var tweetReply = '';
        tweetReply = data.reply !== '' ? '<p class="tweet-reply"><span class="icon icon-reply"></span> In reply to '+ data.reply +'</p>\n' : '';        
        var tweetHtml =       
        tweetReply +
        '<div class="tweet-content">\n'+
          '<a href="#" title="" class="tweet-avatar">\n'+
            '<img src="https://pbs.twimg.com/profile_images/777959576482287617/taEJPem9_bigger.jpg" alt="">\n'+
          '</a>\n'+

          '<header class="tweet-heading">\n'+
            '<a href="#" title="" class="tweet-profile"><strong>'+ data.name +'</strong> '+ data.screenName +' ·  '+ data.schedule +'</a>\n'+
              '<a href="#" title="" class="tweet-translate">\n'+
              '<span class="tweet-translate-text">View translation</span><span class="icon icon-world"></span>\n'+
            '</a>\n'+
          '</header><!-- /.tweet-heading -->\n'+

          '<div class="tweet-body">\n'+ data.text +'</div><!-- /.tweet-body -->\n'+
          
          '<footer class="tweet-footer">\n'+
            '<ul class="tweet-actions">\n'+
              '<li class="tweet-action-reply">\n'+
                '<a href="#" title="">\n'+
                  '<span class="tweet-action-icon icon icon-reply"></span>\n'+
                  '<span class="tweet-action-count">'+ abbreviateCounter(data.counters.reply) +'</span>\n'+
                '</a>\n'+
              '</li>\n'+
          
              '<li class="tweet-action-retweet">\n'+
                '<a href="#" title="">\n'+
                  '<span class="tweet-action-icon icon icon-retweet"></span>\n'+
                  '<span class="tweet-action-count">'+ abbreviateCounter(data.counters.retweets) +'</span>\n'+
                '</a>\n'+
              '</li>\n'+
              
              '<li class="tweet-action-like">\n'+
                '<a href="#" title="">\n'+
                  '<span class="tweet-action-icon">&#10084;</span>\n'+
                  '<span class="tweet-action-count">'+ abbreviateCounter(data.counters.likes) +'</span>\n'+
                '</a>\n'+
              '</li>\n'+
          
              '<li class="tweet-action-menu">\n'+
                '<a href="#" title="">\n'+
                  '<span class="tweet-action-icon icon icon-menu"></span>\n'+
                  '<span class="tweet-action-count">'+ abbreviateCounter(data.counters.menu) +'</span>\n'+
                '</a>\n'+
              '</li>\n'+
              
              '<li class="tweet-conversation">\n'+
                '<a href="#" title="">View conversation</a>\n'+
              '</li>\n'+
            '</ul>\n'+
          '</footer><!-- /.tweet-footer -->\n'+
        '</div><!-- /.tweet-content -->';
              
        addClass(tweetItem, 'tweet-item');
        tweetItem.innerHTML = tweetHtml;
        tweetsList.appendChild(tweetItem);
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
