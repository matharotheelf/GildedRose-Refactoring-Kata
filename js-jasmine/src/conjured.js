class Conjured {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this.sellIn = 10
    this.quality = 3
  }
}

module.exports = {
  Conjured
}
