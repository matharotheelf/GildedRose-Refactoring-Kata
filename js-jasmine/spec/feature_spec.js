describe("Gilded Rose", function() {

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


})
