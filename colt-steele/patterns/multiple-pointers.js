export default function countUniqueValues(arr) {
  let i=0, j=1
  const arrLength = arr.length
  if (!arrLength) return 0
  while (j < arrLength) {
      if (arr[i] !== arr[j]) {
          i+=1
          arr[i] = arr[j]
      } else {
          j++
      }
  }
  return i+1
}