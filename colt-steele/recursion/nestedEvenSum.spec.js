import nestedEvenSum from "./nestedEvenSum";

describe('nestedEvenSum', () => {
  it('(obj1) === 6', () => {
    const obj1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    }

    expect(nestedEvenSum(obj1)).toEqual(6)
  })

  it('(obj2) === 10', () => {
    const obj2 = {
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 2}, ee: 'car'}
    };
    
    expect(nestedEvenSum(obj2)).toEqual(10)
  })
})