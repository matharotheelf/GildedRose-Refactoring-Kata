class AgedBrie {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  _isOutOfDate() {
   return this.sellIn < 1
 }

 _addQualityOne() {
   this.quality += 1
 }

 _addQualityTwo() {
   this.quality += 2
 }

 _reduceSellIn() {
   this.sellIn -= 1
 }

 _maxFifty() {
   if (this.quality > 50) {
     this.quality = 50
   }
 }

 _addQuality() {
   if (this._isOutOfDate()) {
     this._addQualityTwo()
   }
   else {
     this._addQualityOne()
   }
 }

 _changeQuality() {
   this._addQuality()
   this._maxFifty()
 }

 updateQuality() {
    this._reduceSellIn()
    this._changeQuality()
  }


}

module.exports = {
  AgedBrie
}
