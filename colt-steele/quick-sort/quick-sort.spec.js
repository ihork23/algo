import quickSort from "./quick-sort"

describe('quickSort', () => {
  it.only('should ([4,6,9,1,2,5,3]) === [1,2,3,4,5,6,9]', () => {
    expect(quickSort([4,6,9,1,2,5,3])).toEqual([1,2,3,4,5,6,9])
  })
  it('should ([5,4,3,2,1]) === [1,2,3,4,5]', () => {
    expect(quickSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
  })
  it('should ([2,1,9,76,0,23]) === [0,1,2,9,23,76]', () => {
    expect(quickSort([2,1,9,76,0,23])).toEqual([0,1,2,9,23,76])
  })
})