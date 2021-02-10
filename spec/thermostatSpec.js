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

  it('drops 1˚c whenever down is called', function(){
    thermostat._down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('raises an error when taking temperature below 10˚c', function(){
    for (i = 0; i < 10; i++) {thermostat._down()};
    expect(function() {
      thermostat._down()}).toThrow(new Error ('minimum temperature is 10˚c'));
  });

  it('raises an error when taking temperature above 25˚c in power saving mode', function(){
    for (i = 0; i < 5; i++) {thermostat._up()};
    expect(function() {
      thermostat._up()}).toThrow(new Error ('maximum temperature in power saving mode is 25˚c'));
  });

  it('raises an error when taking temperature above 32˚c', function(){
    thermostat._changePowerSavingMode();
    for (i = 0; i < 12; i++) {thermostat._up()};
    expect(function() {
      thermostat._up()}).toThrow(new Error ('maximum temperature is 32˚c'));
  });

  it('switches power saving mode', function(){
    expect(thermostat.powerSaving).toEqual(true);
    thermostat._changePowerSavingMode()
    expect(thermostat.powerSaving).toEqual(false);
  });

});
