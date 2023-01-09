// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
export default function capitalizeFirst(arr) {
  if (!Array.isArray(arr)) return `${arr[0].toUpperCase()}${arr.slice(1)}`
  return [capitalizeFirst(arr[0])].concat(arr.length > 1 ? capitalizeFirst(arr.slice(1)) : [])
}