import reverse from "./reverse";

describe('reverse', () => {
  it('shoud ("s") === "s"', () => {
    expect(reverse('s')).toEqual('s')
  })
  it('shoud ("st") === "ts"', () => {
    expect(reverse('st')).toEqual('ts')
  })
  it('shoud ("str") === "rts"', () => {
    expect(reverse('str')).toEqual('rts')
  })
})