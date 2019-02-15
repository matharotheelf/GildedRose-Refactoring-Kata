class NonSpecial {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    this.sellIn = this.sellIn - 1
    if (this.sellIn < 1) {
      this.quality = this.quality - 2
    }
    else {
      this.quality = this.quality - 1
    }
  }
}
