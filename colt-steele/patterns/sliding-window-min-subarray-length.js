/* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the 
integer passed to the function. If there isn't one, return 0 instead. */

export default function minSubArrayLen(arr, num) {
  let start = 0, end = 0, lowestLen = Infinity, currentSum = 0

  while (start < arr.length) {
    // if sum in window is less end
    if (currentSum < num) {
      if (end < arr.length) { // window can be moved to the right5
        currentSum += arr[end]
        end++
      } else {
        break
      }
    } else if (currentSum >= num) { // if sum in window is bigger, shrink from the left
      lowestLen = Math.min(lowestLen, end - start)
      if (lowestLen === 1) return 1
      currentSum -= arr[start]
      start++
    }
  }
  return lowestLen === Infinity ? 0 : lowestLen
}