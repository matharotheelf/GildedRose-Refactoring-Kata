const { NonSpecial } = require('./nonSpecial.js')
const { option } = require('./option.js')

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  converter(item) {
    if (!(item.name in option)){
      return new NonSpecial(item.sellIn, item.quality)
    } else {
      return new option[item.name](item.sellIn, item.quality)
    }
  }

  updateQuality() {
    this.items.forEach((item) => {
      var convertedItem = this.converter(item)
      convertedItem.updateQuality()
      item.quality = convertedItem.quality
      item.sellIn = convertedItem.sellIn
    })
    return this.items
  }
}
module.exports = {
  Shop
}
