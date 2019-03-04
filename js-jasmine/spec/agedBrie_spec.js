describe("AgedBrie", function() {

  describe ("#updateQuality", function() {

    it("change sellIn by -1 and quality by 1 while sellIn > 0", function() {
      const agedbrie = new AgedBrie(10, 5);
      agedbrie.updateQuality();
      expect(agedbrie.sellIn).toEqual(9);
      expect(agedbrie.quality).toEqual(6);
    })

    it("change sellIn by -1 and quality by 2 while sellIn < 1", function() {
      const agedbrie = new AgedBrie(0, 5);
      agedbrie.updateQuality();
      expect(agedbrie.sellIn).toEqual(-1);
      expect(agedbrie.quality).toEqual(7);
    })

    it("has maximum quality of 50", function() {
      const agedbrie = new AgedBrie(0, 49);
      agedbrie.updateQuality();
      expect(agedbrie.sellIn).toEqual(-1);
      expect(agedbrie.quality).toEqual(50);
    })
  })
})
