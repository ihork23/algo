export default function reverse(str) {
  if (str.length === 0) return ''
  const lastIndex = str.length - 1
  return `${str[lastIndex]}${reverse(str.slice(0, lastIndex))}`
}

// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }