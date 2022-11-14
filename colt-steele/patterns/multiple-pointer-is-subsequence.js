/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
 form a subsequence of the characters in the second string. In other words, the function should check whether the characters 
 in the first string appear somewhere in the second string, without their order changing. */

export default function isSubsequence(substr, str) {
  let i = 0, j = 0
  const substrArr = substr.split('')
  const strArr = str.split('')

  while (i <= strArr.length - substrArr.length + j) {
    if (j === substrArr.length) return true
    if (strArr[i] === substrArr[j]) j++
    i++
  }
  return false
}