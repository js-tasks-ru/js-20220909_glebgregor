/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if(!arr || arr.length === 0){
    return []
  }
  let set = new Set();
  let newArr = [];
  [...arr].map(number =>{
    set.add(number)

  })
  newArr = Array.from(set)
  return newArr ;
}
