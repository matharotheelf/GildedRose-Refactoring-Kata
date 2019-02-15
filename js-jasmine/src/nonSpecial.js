class NonSpecial {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }
   _isOutOfDate() {
    return this.sellIn < 1
  }

  _isPositiveQuality() {
    return this.quality > 0
  }


  _reduceQualityOne() {
    this.quality = this.quality - 1
  }

  _reduceQualityTwo() {
    this.quality = this.quality - 2
  }

  _reduceSellIn() {
    this.sellIn = this.sellIn - 1
  }

  _changeQuality() {
    if (this._isOutOfDate()) {
      this._reduceQualityTwo()
    }
    else {
      this._reduceQualityOne()
    }
  }

  _changeIfPositive() {
    if (this._isPositiveQuality()) {
      this._changeQuality()
    }
  }
  updateQuality() {
    this._reduceSellIn()
    this._changeIfPositive()
  }
}
