class Conjured {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.sellIn < 0) {
      this.sellIn -= 1
      this.quality -= 4
    } else {
      this.sellIn -= 1
      this.quality -= 2
    }
    if (this.quality < 0) {
      this.quality = 0
    }
  }
}

module.exports = {
  Conjured
}
