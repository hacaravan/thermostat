class Thermostat{

  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  };

  _up() {
    if (this.powerSaving === true && this.temperature === 25) {throw new Error ('maximum temperature in power saving mode is 25˚c')}
    this.temperature += 1;
  };

  _down() {
    if (this.temperature === 10) {throw new Error ('minimum temperature is 10˚c')}
    else {this.temperature -= 1;}
  };

}
