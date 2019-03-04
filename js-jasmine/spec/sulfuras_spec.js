describe("Sulfuras", function() {

  describe ("#updateQuality", function() {

    it("sellIn & quality remain the same", function() {
      const sulfuras = new Sulfuras(5, 5);
      sulfuras.updateQuality();
      expect(sulfuras.sellIn).toEqual(5);
      expect(sulfuras.quality).toEqual(5);
    })
  })
})
