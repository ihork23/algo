// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!

export default function stringifyNumbers(obj) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (typeof value === 'number') {
      acc[key] = `${value}`
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      acc[key] = stringifyNumbers(obj[key])
    } else {
      acc[key] = value
    }
    return acc
  }, {})
}