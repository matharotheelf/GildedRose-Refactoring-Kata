const { Item } = require('../src/item.js')

describe("Item", function() {

  it("should save name, sellIn and quality", function() {
     var item = new Item("foo", 0, 0)
     expect(item.name).toEqual("foo")
     expect(item.sellIn).toEqual(0)
     expect(item.quality).toEqual(0)
  })
})
