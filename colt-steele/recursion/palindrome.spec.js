import palindrome from "./palindrome";

describe('palindrome', () => {
  it('should (awesome) === false', () => {
    expect(palindrome('awesome')).toBe(false)
  })
  it('should (foobar) === false', () => {
    expect(palindrome('foobar')).toBe(false)
  })
  it('should (tacocat) === true', () => {
    expect(palindrome('tacocat')).toBe(true)
  })
  it('should (amanaplanacanalpanama) === true', () => {
    expect(palindrome('amanaplanacanalpanama')).toBe(true)
  })
  it('should (amanaplanacanalpandemonium) === false', () => {
    expect(palindrome('amanaplanacanalpandemonium')).toBe(false)
  })
})