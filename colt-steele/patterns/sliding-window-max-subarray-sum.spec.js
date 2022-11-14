import maxSubarraySum from "./sliding-window-max-subarray-sum";

describe('maxSubarraySum', () => {
  it('([], 4) === null', () => {
    expect(maxSubarraySum([], 4)).toBe(null)
  })

  it('([1,2,5,2,8,1,5], 2) === 10', () => {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toBe(10)
  })

  it('([1,2,5,2,8,1,5], 4) === 17', () => {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toBe(17)
  })

  it('([4,2,1,6], 1) === 1', () => {
    expect(maxSubarraySum([4,2,1,6], 1)).toBe(6)
  })

  it('([4,2,1,6,2], 4) === 10', () => {
    expect(maxSubarraySum([4,2,1,6,2], 4)).toBe(13)
  })
})