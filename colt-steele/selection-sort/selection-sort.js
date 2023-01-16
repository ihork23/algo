// selectionSort - find the minimum and swap it with 1st item, find a minimum again, swap with the 2nd
// It's not so efficient as bubble sort On2, but it makes only single swap per iteration

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

export default function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        smallestVal = j
        index = j
      }
    }
    if (i !== lowest) swap(arr, i, index)
  }
  return arr
}