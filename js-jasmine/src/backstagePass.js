class BackstagePass {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this.sellIn -= 1
    this.quality += 1
  }
}

module.exports = {
  BackstagePass
}
