var dateDiff = function(date1, date2){
  let minutes = 1000*60;
  return Math.round((date1 - date2)/minutes);;
}

export default dateDiff;
