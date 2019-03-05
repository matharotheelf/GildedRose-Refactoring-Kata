class BackstagePass {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.sellIn > 10) {
      this.sellIn -= 1
      this.quality += 1
    } else {
      this.sellIn -= 1
      this.quality += 2
    }
  }
}

module.exports = {
  BackstagePass
}
