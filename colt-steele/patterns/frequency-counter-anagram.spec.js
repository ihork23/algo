import validAnagram from './frequency-counter-anagram'

describe('Frequency counter - anagram', () => {
  it("('', '') === true", () => {
    expect(validAnagram('', '')).toBe(true)
  })

  it("('abc', 'bba') === false", () => {
    expect(validAnagram('abc', 'bba')).toBe(false)
  })

  it("('abc', 'cba') === true", () => {
    expect(validAnagram('abc', 'cba')).toBe(true)
  })

  it("('awesome', 'awesom') === false", () => {
    expect(validAnagram('awesome', 'awesom')).toBe(false)
  })

  it("('cinema', 'iceman') === true", () => {
    expect(validAnagram('cinema', 'iceman')).toBe(true)
  })
})