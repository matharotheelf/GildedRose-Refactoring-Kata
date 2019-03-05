const { Sulfuras } = require('./sulfuras.js')
const { Conjured } = require('./conjured.js')
const { BackstagePass } = require('./backstagePass.js')
const { AgedBrie } = require('./agedBrie.js')

const option = {
		  "Sulfuras, Hand of Ragnaros" : Sulfuras,
		  "Aged Brie" : AgedBrie,
		  "Backstage passes to a TAFKAL80ETC concert" : BackstagePass,
		  "Conjured" : Conjured
		}

module.exports = {
  option
}
