describe("backstagePass", function() {

  it("sellIn & quality decrease by one when sellin positve", function() {
    const backstagepass = new BackstagePass(10, 5);
    expect(backstagepass.sellIn).toEqual(10);
    expect(backstagepass.quality).toEqual(5);
  })

  

})
