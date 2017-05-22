function abbreviateCounter(number){
  var verify = 0;

  if(number >= 0 && number <= 999) {
    number = number;
    
  } else {
    number = number / 1000;        
    verify = number.toString();
    verify = verify.split('.');
    
    if(verify.length > 1){
      number = number.toFixed(1);
    } else {
      number = number.toFixed(0);
    }
    
    number = number + 'K';
  }

  return number;
}

function addClass(elem, elemClass){
  // IE10+
  if (elem.classList){
    elem.classList.add(elemClass);
  } else {
    var currentClass = elem.className;

    if(currentClass.indexOf(elemClass) < 1){
      elem.className += ' ' + elemClass;
    }
  }
}