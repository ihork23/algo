// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

export default function nestedEvenSum(obj) {
  return Object.values(obj).reduce((sum, item) => {
    if (item % 2 === 0) {
      sum += item
    } else if (typeof item === 'object') {
      sum += nestedEvenSum(item)
    }
    return sum
  }, 0)
}