const { Conjured } = require('../src/conjured.js')

describe("Conjured", function() {

  it("Conjured quality decreases by 2 and sell in by 1 before sell by", function() {
    const conjured = new Conjured(11, 5);
    conjured.updateQuality();
    expect(conjured.sellIn).toEqual(10);
    expect(conjured.quality).toEqual(3);
  })

  it("Conjured quality decreases by 2 and sell in by 1 before sell by", function() {
    const conjured = new Conjured(9, 4);
    conjured.updateQuality();
    expect(conjured.sellIn).toEqual(8);
    expect(conjured.quality).toEqual(2);
  })

  it("Conjured quality decreases by 4 and sell in by 1 after sell by", function() {
    const conjured = new Conjured(-1, 5);
    conjured.updateQuality();
    expect(conjured.sellIn).toEqual(-2);
    expect(conjured.quality).toEqual(1);
  })

  it("Conjured quality is never less than zero", function() {
    const conjured = new Conjured(-1, 3);
    conjured.updateQuality();
    expect(conjured.sellIn).toEqual(-2);
    expect(conjured.quality).toEqual(0);
  })
})
