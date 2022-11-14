// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there
// is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
// Bonus Constraints:
// Time: O(N)
// Space: O(1)

export default function averagePair(arr, num) {
  let i = 0, j = arr.length - 1
  while (i < j) {
    const current = (arr[j] + arr[i]) / 2
    if (current === num) return true
    if (current < num) i++
    if (current > num) j--
  }
  return false
}