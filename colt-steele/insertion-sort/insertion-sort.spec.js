import insertionSort from "./insertion-sort"

describe('insertionSort', () => {
  it('should ([5,4,3,2,1]) === [1,2,3,4,5]', () => {
    expect(insertionSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
  })
  it('should ([2,1,9,76,0]) === [0,1,2,9,76]', () => {
    expect(insertionSort([2,1,9,76,0])).toEqual([0,1,2,9,76])
  })
})