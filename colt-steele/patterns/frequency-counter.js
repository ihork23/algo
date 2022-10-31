export default function frequencyCounter(arr1, arr2) {
  const freqCounter1 = {}
  const freqCounter2 = {}
  if (arr1.length !== arr2.length) return false
  arr1.forEach(val => freqCounter1[val] = (freqCounter1[val] || 0) + 1)
  arr2.forEach(val => freqCounter2[val] = (freqCounter2[val] || 0) + 1)
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2) || freqCounter1[key ** 2] !== freqCounter2[key]) return false
  }
  return true
}
