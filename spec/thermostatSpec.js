describe('Thermostat', function() {
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it('starts at 20˚C', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('rises 1˚C whenever up is called', function(){
    thermostat._up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('drops 1˚C whenever down is called', function(){
    thermostat._down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('raises an error when taking temperature below 10˚C', function(){
    for (i = 0; i < 10; i++) {thermostat._down()};
    expect(function() {
      thermostat._down()}).toThrow(new Error ('minimum temperature is 10˚C'));
  });

  it('raises an error when taking temperature above 25˚C in power saving mode', function(){
    for (i = 0; i < 5; i++) {thermostat._up()};
    expect(function() {
      thermostat._up()}).toThrow(new Error ('maximum temperature in power saving mode is 25˚C'));
  });

  it('raises an error when taking temperature above 32˚C', function(){
    thermostat._changePowerSavingMode();
    for (i = 0; i < 12; i++) {thermostat._up()};
    expect(function() {
      thermostat._up()}).toThrow(new Error ('maximum temperature is 32˚C'));
  });

  it('switches power saving mode', function(){
    expect(thermostat.powerSavingMode).toEqual(true);
    thermostat._changePowerSavingMode()
    expect(thermostat.powerSavingMode).toEqual(false);
  });

  it('lowers the temperature to 25˚C when switched to power saving mode if temperature exceeds 25˚C', function() {
    thermostat._changePowerSavingMode();
    for (i = 0; i < 10; i++) {thermostat._up()};
    thermostat._changePowerSavingMode();
    expect(thermostat.temperature).toEqual(25);
  });

  it('resets the temperature to 20˚C when reset is called', function() {
    thermostat._reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns the current energy usage', function() {
    for (i = 0; i < 3; i++) {thermostat._down()};
      expect(thermostat._currentEnergyUsage()).toEqual('Low')
    for (i = 0; i < 8; i++) {thermostat._up()};
      expect(thermostat._currentEnergyUsage()).toEqual('Medium')
    thermostat._changePowerSavingMode();
    thermostat._up();
    expect(thermostat._currentEnergyUsage()).toEqual('High')
  });

  describe("isMaxTemp", function() {
    describe("when power saving mode is on", function() {
      it("returns false below 25", function() {
        expect(thermostat.isMaxTemp()).toBe(false);
      })
      it("returns true at 25", function() {
        for(let i = 0; i < 5; i++) {
          thermostat._up();
        }
        expect(thermostat.isMaxTemp()).toBe(true);
      })
    })
    describe("when power saving mode is off", function() {
      beforeEach( () => {
        thermostat._changePowerSavingMode();
      });
      it("returns false below 32", function() {
        for(let i = 0; i < 6; i++) {
          thermostat._up();
        }
        expect(thermostat.isMaxTemp()).toBe(false);
      })
      it("returns true at 32", function() {
        for(let i = 0; i < 12; i++) {
          thermostat._up();
        }
        expect(thermostat.isMaxTemp()).toBe(true);
      })
    })
  })

});
