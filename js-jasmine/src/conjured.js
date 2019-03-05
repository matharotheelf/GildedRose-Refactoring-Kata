class Conjured {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this.sellIn -= 1
    this.quality -= 2
  }
}

module.exports = {
  Conjured
}
