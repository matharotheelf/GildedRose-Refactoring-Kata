class BackstagePass {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this._addQuality()
    this._maxFifty()
  }

  _changeQualityOne() {
    this.sellIn -= 1
    this.quality += 1
  }

  _changeQualityTwo() {
    this.sellIn -= 1
    this.quality += 2
  }

  _changeQualityThree() {
    this.sellIn -= 1
    this.quality += 3
  }

  _addQuality() {
    if (this.sellIn > 10) {
      this._changeQualityOne()
    } else if (this.sellIn > 5 ) {
      this._changeQualityTwo()
    } else {
      this._changeQualityThree()
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
