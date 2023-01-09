export default function capitalizeWords(arr) {
  return [arr[0].toUpperCase()].concat(arr.length > 1 ? capitalizeWords(arr.slice(1)) : [])
}