const { Conjured } = require('../src/conjured.js')

describe("Conjured", function() {

  it("Saves Conjured quality and sell in decrease by 2 before sell by", function() {
    const conjured = new Conjured(11, 5);
    conjured.updateQuality()
    expect(conjured.sellIn).toEqual(10)
    expect(conjured.quality).toEqual(3)
  })
})
