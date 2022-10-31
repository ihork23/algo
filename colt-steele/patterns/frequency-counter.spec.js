import frequencyCounter from "./frequency-counter";

describe('frequencyCounter - second array contains squared values from the first array', () => {
  it('([1], [1]) === true', () => {
    expect(frequencyCounter([1], [1])).toBe(true)
  })

  it('([2], [4]) === true', () => {
    expect(frequencyCounter([2], [4])).toBe(true)
  })

  it('([1, 2], [1]) === false', () => {
    expect(frequencyCounter([1, 2], [1])).toBe(false)
  })

  it('([1, 2], [4, 1]) === true', () => {
    expect(frequencyCounter([1, 2], [4, 1])).toBe(true)
  })

  it('([1, 2, 1], [4, 4, 9]) === false', () => {
    expect(frequencyCounter([1, 2, 1], [4, 4, 9])).toBe(false)
  })
})
