const { Item } = require('../src/gilded_rose.js')
const { Shop } = require('../src/gilded_rose.js')

describe("Gilded Rose", function() {

  describe("Shop", function() {

    it("items default empty list", function() {

      const gildedRose = new Shop()
      expect(gildedRose.items).toEqual([])

    })

  })

  describe("non-special items", function() {

    it("sellIn and quality decreases by 1 before sell by date", function() {

      const gildedRose = new Shop([ new Item("foo", 1, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(1);

    })

    it("sellin decreases by 1 and quality by 2 after sell by date", function() {

      const gildedRose = new Shop([ new Item("foo", 0, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);

    })

    it("sellin decreases by 1 quality doesn't decrease below 0", function() {

      const gildedRose = new Shop([ new Item("foo", 1, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(0);

    })

  })

  describe("Aged Brie", function() {

    it("sellin decreases by 1, quality increases by 1", function() {

      const gildedRose = new Shop([ new Item('Aged Brie', 1, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(1);
    })

    it("sellin decreases by 1, quality increases by 2 after sellIn", function() {

      const gildedRose = new Shop([ new Item('Aged Brie',0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(2);
    })

    it("sellin descreases by 1 quality does not pass 50 after sellIn", function() {

      const gildedRose = new Shop([ new Item('Aged Brie',0, 49) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(50);

    })

    it("sellin decreases by 1, quality doesn't increase past 50", function () {

      const gildedRose = new Shop([ new Item('Aged Brie', 1, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(50);
    })

  })

  describe("Sulfuras, Hand of Ragnaros", function() {

    it("sellin does not change nor quality when sellin positive", function() {

      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', 2, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(2);
      expect(items[0].quality).toEqual(2);
    })

    it("sellin does not change nor quality when sellin negitive or 0", function() {

      const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', -1, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(2);

    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', function() {

    it("sellin decreases by 1, quality increases by 1 when sellin >10", function() {

      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10);
      expect(items[0].quality).toEqual(3);
    })

    it("sellin decreases by 1, quality increases by 2 when sellin =<10, >5", function() {

      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5);
      expect(items[0].quality).toEqual(4);
    })

    it("sellin decreases by 1, quality doesn't increase past 50 when =<10, >5 but quality 49", function() {

      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5);
      expect(items[0].quality).toEqual(50);
    })

    it("sellin decreases by 1, quality increases by 3 when sellin =<5, >0", function() {

      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(5);
    })

    it("sellin decreases by 1, quality increases by 2 when sellin =<5, >0 but quality 48", function() {

      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(50);
    })

    it("sellin decreases by 1, quality becomes 0 when sellin =<0", function() {

      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    })

    it("sellin decreases by 1, quality becomes 0 when sellin =<0", function() {

      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 2) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    })

    it("sellin decreases by 1, quality can not increase more than 50 when at 50", function() {

      const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(50);
    })
  })
})
