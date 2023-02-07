/* Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
Works by selecting one element ("pivot") and finding the index where the pivot should end up in the sorted array
Once the pivot is positioned appropritely, quick sort can be applied on either side of the pivot

Choose 1st item as pivot. Move all smaller items to the left, all bigger to the right. Do the same operation for each part
- keep the current index of pivot
- if value is less then pivot, increment pivot index and swap the current element with the element at the pivot index

Example of single iteration
4,8,2,1,5,7,6,3
4,2,8,1,5,7,6,3
4,2,8,1,5,7,6,3
4,2,1,8,5,7,6,3
4,2,1,3,5,7,6,8
3,2,1,4,5,7,6,8

The whole algo
[4,6,9,1,2,5,3]
[3,1,2,4,9,5,6]
[3,1,2]4[9,5,6]
[2,1,3]4[6,5,9]
[1,2]3,4[5,6]9
*/
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

const getPivotIndex = (arr, start, end) => {
  const pivot = arr[start]
  let pivotIndex = start

  for (let i = start + 1; i <= end ; i += 1) {
    if (arr[i] < pivot) {
      pivotIndex += 1
      swap(arr, i, pivotIndex)
    }
  }

  swap(arr, start, pivotIndex)
  return pivotIndex
}

export default function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = getPivotIndex(arr, start, end)
    quickSort(arr, start, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, end)
  }
  return arr  
}

function quickSort1(arr) {
  // New array is created :(
  if (arr.length < 2) return arr
  const pivot = arr[0]
  const arr1 = []
  const arr2 = []

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < pivot) {
      arr1.push(arr[i])
    } else {
      arr2.push(arr[i])
    }
  }
  
  return [...quickSort(arr1), pivot, ...quickSort(arr2)]
}