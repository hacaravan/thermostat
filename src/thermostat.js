class Thermostat{

  constructor() {
    this.temperature = 20;
  };

  _up() {
    this.temperature += 1;
  };

  _down() {
    if (this.temperature === 10) {throw new Error ('minimum temperature is 10˚c')}
    else {this.temperature -= 1;}
  };

}
