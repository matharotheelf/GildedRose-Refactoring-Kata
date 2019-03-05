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

  _reduceQualityOne() {
    this.quality += 1
  }

  _reduceQualityTwo() {
    this.quality += 2
  }

  _reduceQualityThree() {
    this.quality += 3
  }

  _addQuality() {
    if (this.sellIn > 10) {
      this._reduceQualityOne()
    } else if (this.sellIn > 5 ) {
      this._reduceQualityTwo()
    } else {
      this._reduceQualityThree()
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
