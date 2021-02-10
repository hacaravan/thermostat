class Thermostat{

  constructor() {
    this.temperature = 20;
  };

  _up() {
    this.temperature += 1;
  };

  _down() {
    this.temperature -= 1;
  };

}
