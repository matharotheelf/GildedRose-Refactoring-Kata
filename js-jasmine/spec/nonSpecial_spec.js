describe("NonSpecial", function() {

  describe ("#updateQuality", function() {

    it("sellIn & quality decrease by one when sellin positve", function() {
      const nonspecial = new NonSpecial(10, 5);
      nonspecial.updateQuality();
      expect(nonspecial.sellIn).toEqual(9);
      expect(nonspecial.quality).toEqual(4)
    })

    it("sellIn decrease by one and quality by 2 when sellin =<0", function() {
      const nonspecial = new NonSpecial(0, 2);
      nonspecial.updateQuality();
      expect(nonspecial.sellIn).toEqual(-1);
      expect(nonspecial.quality).toEqual(0);
    })

    it("never has negative value of quality", function() {
      const nonspecial = new NonSpecial(1, 0);
      nonspecial.updateQuality();
      expect(nonspecial.sellIn).toEqual(0);
      expect(nonspecial.quality).toEqual(0);
    })
  })
})
