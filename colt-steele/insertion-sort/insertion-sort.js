/* Choose a 2nd element, compare with one before and swap if necessary
Take next el, compare with all items left and put it to the correct place
(items will shift from left to right on each iteration) 

Insertion sort is good for already sorted array which accepts new data and want to put it in a specific place
*/
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    const currentVal = arr[i]
    let j = i - 1
    while (arr[j] > currentVal && j > -1) {
      arr[j + 1] = arr[j]
      console.log('--', arr)
      j--
    }
    arr[j + 1] = currentVal
      console.log('-', arr)
    
  }
  return arr
}

/*
-- [ 5, 5, 3, 2, 1 ]
- [ 4, 5, 3, 2, 1 ]
-- [ 4, 5, 5, 2, 1 ]
-- [ 4, 4, 5, 2, 1 ]
- [ 3, 4, 5, 2, 1 ]
-- [ 3, 4, 5, 5, 1 ]
-- [ 3, 4, 4, 5, 1 ]
-- [ 3, 3, 4, 5, 1 ]
- [ 2, 3, 4, 5, 1 ]
-- [ 2, 3, 4, 5, 5 ]
-- [ 2, 3, 4, 4, 5 ]
-- [ 2, 3, 3, 4, 5 ]
-- [ 2, 2, 3, 4, 5 ]
- [ 1, 2, 3, 4, 5 ]
*/