import capitalizeFirst from "./capitalizeFirst";

describe('capitalizeFirst', () => {
  it('should ["car", "taco", "banana"] === ["Car", "Taco", "Banana"]', () => {
    expect(capitalizeFirst(["car", "taco", "banana"])).toEqual(["Car", "Taco", "Banana"])
  })
})