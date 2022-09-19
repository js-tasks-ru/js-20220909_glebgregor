/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */


export function sortStrings(arr, param= 'asc') {
  const arrCopy = [...arr];
  if(param === 'asc'){
   arrCopy.sort((a, b) => a.localeCompare(b, ['ru', 'en'], {sensitivity: 'variant', caseFirst: 'upper' }))
  }
  if(arr === arr && param === 'desc'){
      arrCopy.sort((a, b) => -a.localeCompare(b, ['ru', 'en'], {sensitivity: 'variant', caseFirst: 'upper' }))
    }

  return arrCopy;

}

