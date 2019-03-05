const { BackstagePass } = require('../src/backstagePass.js')

describe("BackstagePass", function() {

  it("sellIn decreases and quality increases by one when sellin >10", function() {
    const backstagepass = new BackstagePass(11, 5);
    backstagepass.updateQuality()
    expect(backstagepass.sellIn).toEqual(10);
    expect(backstagepass.quality).toEqual(6);
  })

  it("sellIn decreases and quality increases by one when sellin >10", function() {
    const backstagepass = new BackstagePass(12, 4);
    backstagepass.updateQuality()
    expect(backstagepass.sellIn).toEqual(11);
    expect(backstagepass.quality).toEqual(5);
  })

  it("sellIn decreases by one and quality increases by two when sellin <10, >5", function() {
    const backstagepass = new BackstagePass(8, 4);
    backstagepass.updateQuality()
    expect(backstagepass.sellIn).toEqual(7);
    expect(backstagepass.quality).toEqual(6);
  })

  it("sellIn decreases by one and quality increases by three when sellin <5", function() {
    const backstagepass = new BackstagePass(4, 4);
    backstagepass.updateQuality()
    expect(backstagepass.sellIn).toEqual(3);
    expect(backstagepass.quality).toEqual(7);
  })

  it("sellIn decreases by one and quality is 0 when sellin <0", function() {
    const backstagepass = new BackstagePass(0, 20);
    backstagepass.updateQuality()
    expect(backstagepass.sellIn).toEqual(-1);
    expect(backstagepass.quality).toEqual(0);
  })


  it("sellIn does not increase past 50", function() {
    const backstagepass = new BackstagePass(4, 48);
    backstagepass.updateQuality()
    expect(backstagepass.sellIn).toEqual(3);
    expect(backstagepass.quality).toEqual(50);
  })



})
