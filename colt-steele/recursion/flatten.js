// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

export default function flatten(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

// function flatten(arr){
//   const val = Array.isArray(arr[0])  ? flatten(arr[0]) : [arr[0]]
//   return arr.length > 1 ? val.concat(flatten(arr.slice(1))) : val
// }