class BackstagePass {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this._addQuality()
    this._maxFifty()
    this.sellIn -= 1
  }

  _addQuality() {
    if (this.sellIn > 10) {
      this.quality += 1
    } else if (this.sellIn > 5 ) {
      this.quality += 2
    } else if (this.sellIn > 0) {
      this.quality += 3
    } else {
      this.quality = 0
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
