// function swap(arr, index1, index2) {
//   const temp = arr[index1]
//   arr[index1] = arr[index2]
//   arr[index2] = temp
// }

const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

export default function bubbleSort(arr) {
  let noSwaps = false
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

/* i - the biggest number will go the top at 1st iteration, 2nd at the 2nd. So each time we need to swap less items
noSwap - optimisation, if there wasn't any swap during iteratio, it means an array is already sorted */