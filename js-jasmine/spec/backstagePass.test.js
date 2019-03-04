const { BackstagePass } = require('../src/backstagePass.js')

describe("BackstagePass", function() {

  it("sellIn decreases and quality increases by one when sellin >10", function() {
    const backstagepass = new BackstagePass(11, 5);
    backstagepass.updateQuality()
    expect(backstagepass.sellIn).toEqual(10);
    expect(backstagepass.quality).toEqual(6);
  })




})
