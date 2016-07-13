/**
 * Find the class in the element
 *
 * @param {DOM} element -
 * @param {string} className -
 * @returns {boolean}
 *
 */
export function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  }
  else {
    return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
}

/**
 * Add the class of element
 *
 * @param {DOM} element -
 * @param {string} className -
 *
 */
export function addClass(element, className) {
  try {
    if (element.classList) {
      element.classList.add(className);
    }
    else if (!hasClass(element, className)) {
      element.className += " " + className;
    }
    return true;
  } catch(error) {
    return false;
  }
}

/**
 * Remove the class of element
 *
 * @param {DOM} element -
 * @param {string} className -
 *
 */
export function removeClass(element, className) {
  try {
    if (element.classList){
      element.classList.remove(className);
    }
    else if (hasClass(element, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      element.className = element.className.replace(reg, ' ');
    }
    return true;
  } catch(error) {
    return false;
  }
}
