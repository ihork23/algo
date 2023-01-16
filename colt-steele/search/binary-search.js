/* Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. 
Otherwise, return -1.
This algorithm should be more efficient than linearSearch - you can read how to implement it here
 - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here 
 - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
 */

 /*
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer
  - create a pointer in the middle
  - if you find the value you want, return the index
  - if the value is too small, move the left pointer up
  - if the value is too large, move the right pointer down
- If you never find the value, return -1
*/

export default function binarySearch(arr, a) {
  let start = 0, end = arr.length - 1, middle
  while (start <= end) {
    middle = Math.floor((start + end)/2)
    if (arr[middle] === a) {
      return middle
    }
    if (arr[middle] > a) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return -1
}