/* Exploits the fact that arrays of 0 or 1 element are always sorted
Works by decomposing an array into smaller arrays of 0 and 1 elements 
*/

function mergeArrs(arr1, arr2) {
  let i = 0, j = 0
  const result = []; 
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}

export default function mergeSort(arr) {
  if (arr.length < 2) return arr
  const mid = Math.round(arr.length / 2)
  return mergeArrs(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}