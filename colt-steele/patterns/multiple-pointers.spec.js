import countUniqueValues from './multiple-pointers'

describe('countUniqueValues', () => {
  it('([1]) === 1', () => {
    expect(countUniqueValues([1])).toBe(1)
  })

  it('([1, 2]) === 2', () => {
    expect(countUniqueValues([1, 2])).toBe(2)
  })

  it('([1, 2, 2]) === 2', () => {
    expect(countUniqueValues([1, 2, 2])).toBe(2)
  })

  it('([-2, -1, -1, 0, 1]) === 4', () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4)
  })

  it('([]) === 0', () => {
    expect(countUniqueValues([])).toBe(0)
  })
})