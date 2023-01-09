import capitalizeWords from "./capitalizeWords";

describe('capitalizeWords', () => {
  it("(['i', 'am', 'learning', 'recursion']) === ['I', 'AM', 'LEARNING', 'RECURSION']", () => {
    expect(capitalizeWords(['i', 'am', 'learning', 'recursion'])).toEqual(['I', 'AM', 'LEARNING', 'RECURSION'])
  })
})