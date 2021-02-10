describe('Thermostat', function() {
    let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20•c', function(){
    expect(thermostat.temperature).toEqual(20);
  });

});
