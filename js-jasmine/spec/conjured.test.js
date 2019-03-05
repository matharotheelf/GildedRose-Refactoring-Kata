const { Conjured } = require('../src/conjured.js')

describe("Conjured", function() {

  it("Saves Conjured quality and sell in value", function() {
    const conjured = new Conjured(11, 5);
    expect(conjured.sellIn).toEqual(11)
    expect(conjured.quality).toEqual(5)
  })
})
