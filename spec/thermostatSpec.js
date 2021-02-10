describe('Thermostat', function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20˚c', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('rises 1˚c whenever up is called', function(){
    thermostat._up();
    expect(thermostat.temperature).toEqual(21);
  });

});
