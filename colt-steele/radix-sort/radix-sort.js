const getDigit = (num, digit) => {
  return Math.floor(Math.abs(num)/Math.pow(10, digit)) % 10
}

const digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

const getMaxDigits = (arr) => {
  let max = 0
  arr.forEach(val => max = Math.max(digitCount(val), max))
  return max
}

export default function radixSort(arr) {
  const maxDigit = getMaxDigits(arr)
  for (let digit = 0; digit < maxDigit; digit++) {
    const buckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < arr.length; i++) {
      const numberDigit = getDigit(arr[i], digit)
      buckets[numberDigit].push(arr[i])
    }

    arr = [].concat(...buckets)
  }

  return arr
}