(function(){
  var request = new XMLHttpRequest(),
      url = 'mocks/trends.json';
      
  request.open('GET', url, true);
  
  request.addEventListener('load', function(){
    if (request.status >= 200 && request.status < 400) {
      var datas = JSON.parse(request.responseText);
      
      datas.forEach(function(data){
        var trendsList = document.getElementById('trends-list');
        var trendsItem = document.createElement('li');
        var trendsText = '';        
        trendsText = data.desc === '' ? abbreviateCounter(data.count) + ' Tweets' : data.desc;
                
        var trendsHtml = 
          '<a href="'+ data.url +'" title="">\n'+
            '<span class="trend-hastag">'+ data.hashtag +'</span>\n'+
            '<span class="trend-text">'+ trendsText +'</span>\n'+
          '</a>';
          
        trendsItem.innerHTML = trendsHtml;
        trendsList.appendChild(trendsItem);
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