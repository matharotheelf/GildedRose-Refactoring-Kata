class BackstagePass {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this._addQuality()
    this._maxFifty()
  }

  _addQuality() {
    if (this.sellIn > 10) {
      this.sellIn -= 1
      this.quality += 1
    } else if (this.sellIn > 5 ) {
      this.sellIn -= 1
      this.quality += 2
    } else {
      this.sellIn -= 1
      this.quality += 3
    }
  }

  _maxFifty() {
    if (this.quality > 50) {
      this.quality = 50
    }
  }
}

module.exports = {
  BackstagePass
}
