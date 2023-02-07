import mergeSort from "./merge-sort"

describe('mergeSort', () => {
  it('should ([5,4,3,2,1]) === [1,2,3,4,5]', () => {
    expect(mergeSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
  })
  it('should ([2,1,9,76,0,23]) === [0,1,2,9,23,76]', () => {
    expect(mergeSort([2,1,9,76,0,23])).toEqual([0,1,2,9,23,76])
  })
})