import stringifyNumbers from "./stringifyNumbers";

describe('stringifyNumbers', () => {
  it('should stringify numbers in object', () => {
    const obj = {
      num: 1,
      test: [],
      data: {
          val: 4,
          info: {
              isRight: true,
              random: 66
          }
      }
    }

    const expectedObj = {
      num: "1",
      test: [],
      data: {
          val: "4",
          info: {
              isRight: true,
              random: "66"
          }
      }
    }

    expect(stringifyNumbers(obj)).toEqual(expectedObj)
  })
})