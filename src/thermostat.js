class Thermostat{

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = true;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE = 25;
    this.MAXIMUM_TEMPERATURE = 32;
  };

  isMaxTemp() {
    if(this.powerSavingMode) {
      return this.temperature === this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE;
    } else {
      return this.temperature === this.MAXIMUM_TEMPERATURE;
    };
  }

  _up() {
    if (this.powerSavingMode === true && this.temperature === this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE)
      {throw new Error ('maximum temperature in power saving mode is 25˚C')}
    else if (this.powerSavingMode === false && this.temperature === this.MAXIMUM_TEMPERATURE)
      {throw new Error ('maximum temperature is 32˚C')};
    this.temperature ++;
  };

  _down() {
    if (this.temperature === this.MINIMUM_TEMPERATURE)
      {throw new Error ('minimum temperature is 10˚C')}
    else {this.temperature --;};
  };

  _changePowerSavingMode() {
    this.powerSavingMode = !this.powerSavingMode;
    if (this.powerSavingMode === true && this.temperature > this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE )
     {this.temperature = this.MAXIMUM_TEMPERATURE_POWER_SAVING_MODE};
  };

  _reset() {
    this.temperature = 20;
  };

  _currentEnergyUsage() {
    if (this.temperature < 18) {
      return "Low"
    } else if (this.temperature <= 25) {
      return "Medium"
    } else {
      return "High"
    }
  };

}
