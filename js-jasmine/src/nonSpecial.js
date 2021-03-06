class NonSpecial {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  _changeQuality() {
    if (this.sellIn < 1) {
      this.quality -= 2
    }
    else {
      this.quality -= 1
    }
  }

  _minZero() {
    if (this.quality < 0) {
      this.quality = 0
    }
  }

  updateQuality() {
    this._changeQuality()
    this._minZero()
    this.sellIn -= 1
  }
}

module.exports = {
  NonSpecial
}
