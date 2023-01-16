import searchString from "./search-string";

describe('searchString', () => {
  it('("test-file",  "file") === true', () => {
    expect(searchString("test-file",  "file")).toEqual(1)
  })
  it('("test-file",  "fila") === false', () => {
    expect(searchString("test-file",  "false")).toEqual(0)
  })
})