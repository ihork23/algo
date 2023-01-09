import someRecursive from "./someRecursive";

const isOdd = val => val % 2 !== 0;

describe('someRecursive', () => {
  it('should ([1,2,3,4], isOdd) === true', () => {
    expect(someRecursive([1,2,3,4], isOdd)).toBe(true)
  })
  it('should ([4,6,8,9], isOdd) === true', () => {
    expect(someRecursive([4,6,8,9], isOdd)).toBe(true)
  })
  it('should ([4,6,8], isOdd) === false', () => {
    expect(someRecursive([4,6,8], isOdd)).toBe(false)
  })
  it('should ([4,6,8], val => val > 10) === false', () => {
    expect(someRecursive([4,6,8], val => val > 10)).toBe(false)
  })
})