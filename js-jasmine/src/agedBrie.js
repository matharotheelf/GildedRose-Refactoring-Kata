class AgedBrie {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  _isOutOfDate() {
   return this.sellIn < 1
 }


 _addQualityOne() {
   this.quality = this.quality + 1
 }

 _addQualityTwo() {
   this.quality = this.quality + 2
 }

 _reduceSellIn() {
   this.sellIn = this.sellIn - 1
 }

 updateQuality() {
    this._reduceSellIn()
    if (this._isOutOfDate()) {
      this._addQualityTwo()
    }
    else {
      this._addQualityOne()
    }
  }


}
