export default function palindrome(str) {
  if (str === '') return true
  if (str[0] !== str[str.length - 1]) return false
  return palindrome(str.slice(1, -1))
}