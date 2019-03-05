class Conjured {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this.sellIn -= 1
    this._decreaseQuality()
    this._minZero()

  }

  _decreaseQuality() {
    if (this.sellIn < 0) {
      this.quality -= 4
    } else {
      this.quality -= 2
    }
  }

  _minZero() {
    if (this.quality < 0) {
      this.quality = 0
    }
  }

}

module.exports = {
  Conjured
}
