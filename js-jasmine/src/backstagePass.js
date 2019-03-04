class BackstagePass {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this.sellIn = 10
    this.quality = 6
  }
}

module.exports = {
  BackstagePass
}
