import selectionSort from "./selection-sort"

describe('selection sort', () => {
  it('should ([5,4,3,2,1]) === [1,2,3,4,5]', () => {
    expect(selectionSort([5,4,3,2,1])).toEqual([1,2,3,4,5])
  })
})