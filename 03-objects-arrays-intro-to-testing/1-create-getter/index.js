/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathArray = path.split('.')
  return function getter(obj) {
    let result = obj
    for (let item of pathArray) {
      if (result === undefined) {
        break;
      }
      result = result[item]
    }
    return result;
  }
}
