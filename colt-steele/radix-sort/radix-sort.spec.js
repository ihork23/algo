import radixSort from "./radix-sort"

describe('radixSort', () => {
  it('should ([4,6,9,1,2,5,3]) === [1,2,3,4,5,6,9]', () => {
    expect(radixSort([4,6,9,1,2,5,3])).toEqual([1,2,3,4,5,6,9])
  })
  it('should ([5,4,3,2,1]) === [1,2,3,4,5]', () => {
    expect(radixSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
  })
  it('should ([20,103,91,3076,79,24]) === [20,24,79,91,103,3076]', () => {
    expect(radixSort([20,103,91,3076,79,24])).toEqual([20,24,79,91,103,3076])
  })
})