const { Item } = require('../src/item.js')
const { Shop } = require('../src/shop.js')

describe("Item", function() {

  it("name should remain the same", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

});
