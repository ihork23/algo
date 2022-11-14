import isSubsequence from "./multiple-pointer-is-subsequence";

describe('isSubsequence', () => {
  it("('hello', 'hello world') === true", () => {
    expect(isSubsequence('hello', 'hello world')).toBe(true)
  })

  it("('sing', 'sting') === true", () => {
    expect(isSubsequence('sing', 'sting')).toBe(true)
  })

  it("('abc', 'abracadabra') === true", () => {
    expect(isSubsequence('abc', 'abracadabra')).toBe(true)
  })

  it("('abc', 'acb') === false", () => {
    expect(isSubsequence('abc', 'acb')).toBe(false)
  })
})