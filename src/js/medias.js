(function(){
  var request = new XMLHttpRequest(),
      url = 'mocks/medias.json';
      
  request.open('GET', url, true);
  
  request.addEventListener('load', function(){
    if (request.status >= 200 && request.status < 400) {
      var datas = JSON.parse(request.responseText);
      
      var mediasCounter = document.getElementById('medias-counter');
      mediasCounter.innerText = abbreviateCounter(datas.length);      
      
      datas.forEach(function(data){
        var mediasList = document.getElementById('medias-list');
        var mediasItem = document.createElement('li');
        var mediasHtml = 
          '<a href="#" title="">\n'+
            '<img src="'+ data.media +'" alt="">\n'+
          '</a>';
          
        mediasItem.innerHTML = mediasHtml;
        mediasList.appendChild(mediasItem);        
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