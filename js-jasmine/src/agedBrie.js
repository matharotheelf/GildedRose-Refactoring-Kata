class AgedBrie {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

 _maxFifty() {
   if (this.quality > 50) {
     this.quality = 50
   }
 }

 _addQuality() {
   if (this.sellIn < 1) {
     this.quality += 2
   }
   else {
     this.quality += 1
   }
 }

 updateQuality() {
    this._addQuality()
    this._maxFifty()
    this.sellIn -= 1
  }
}

module.exports = {
  AgedBrie
}
