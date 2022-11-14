export default function validAnagram(str1, str2) {
  function countFrequency(str) {
    return str.split('').reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1
      return acc
    }, {})
  }

  function compare(freqCounter1, freqCounter2) {
    if (Object.keys(freqCounter1).length !== Object.keys(freqCounter2).length) return false
    for (let letter in freqCounter1) {
      if (freqCounter1[letter] !== freqCounter2[letter]) return false
    }
    return true
  }

  return compare(countFrequency(str1), countFrequency(str2))
}