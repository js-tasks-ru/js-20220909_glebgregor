/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
import {re} from "@babel/core/lib/vendor/import-meta-resolve";

const compare = (direction) => (a, b) => {
  return (
    direction * a.localeCompare(b, ['ru', 'en'], {sensitivity: 'variant', caseFirst: 'upper' })
  )
}

export function sortStrings(arr, param= 'asc') {
  const arrCopy = [...arr];
  if(param === 'asc'){
    arrCopy.sort(compare(1))
  }
  if(param === 'desc'){
    arrCopy.sort(compare(-1))
    }

  return arrCopy;

}

