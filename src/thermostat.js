class Thermostat{

  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  };

  _up() {
    if (this.powerSaving === true && this.temperature === 25)
      {throw new Error ('maximum temperature in power saving mode is 25˚C')}
    else if (this.powerSaving === false && this.temperature === 32)
      {throw new Error ('maximum temperature is 32˚C')};
    this.temperature += 1;
  };

  _down() {
    if (this.temperature === 10)
      {throw new Error ('minimum temperature is 10˚C')}
    else {this.temperature -= 1;};
  };

  _changePowerSavingMode() {
    this.powerSaving = !this.powerSaving;
    if (this.powerSaving === true && this.temperature > 25 )
     {this.temperature = 25};
  };

  _reset() {
    this.temperature = 20;
  };


}
