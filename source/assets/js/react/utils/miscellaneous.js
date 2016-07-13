export function thousandsFormatter(num) {
  let isNegative = false;
  let formattedNumber;

  if(typeof num !== 'number' || typeof num === 'undefined' ){
    return false;
  }

  if (num < 0) {
    isNegative = true;
  }

  num = Math.abs(num);

  if (num >= 1000000000) {
    formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  } else if (num >= 1000000) {
    formattedNumber =  (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else  if (num >= 1000) {
    formattedNumber =  (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    formattedNumber = num;
  }
  if(isNegative) {
    formattedNumber = '-' + formattedNumber;
  }
  return formattedNumber;
}

export function textToLinks(text) {
  if(typeof text !== 'string' || typeof text === 'undefined' ){
    return false;
  }

  let re = /(https?:\/\/(([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?))/g;

  return text.replace(re, "<a href=\"$1\">$1</a>");
}

export function identifyFirstHashTag(text) {
  if(typeof text !== 'string' || typeof text === 'undefined' ){
    return false;
  }

  let hashTag = text.match(/#\S+/g);

  if(hashTag){
    return hashTag[0].replace('#', '');
  } else {
    return false;
  }
}

export function stringShortener(text, maxLength) {
  if(typeof text !== 'string' || typeof text === 'undefined' ){
    return false;
  }

  maxLength = maxLength || 5;

  if(typeof maxLength !== 'number'){
    return false;
  }

  if (text.length > maxLength) {
    text = text.substring(0, maxLength)+'...';
  }
  return text;
}

export function dateMonthYear(date) {
  if(typeof date !== 'string' || typeof date === 'undefined' || !isDate(date) ){
    return false;
  }

  date = new Date(Date.parse(date.replace(/( \+)/, ' UTC$1')));

  let year = date.getUTCFullYear();
  let month = date.getUTCMonth();
  let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return `${monthArray[month]} ${year}`;
}

export function isDate(date) {
  if(typeof date !== 'string' || typeof date === 'undefined'){
    return false;
  }

  return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) ) ? true : false;
}
