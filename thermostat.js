class Thermostat {
  constructor() {
    this.currentTemp = 20;
    this.powerSavingMode = true;
  }

  temp() {
    return this.currentTemp;
  }

  up() {
    this.currentTemp += 1;
    if (this.isPowerSavingOn() && this.currentTemp > 25) {
    this.currentTemp = 25;
    }
  }

  down() {
    this.currentTemp -= 1;
  }

  isPowerSavingOn() {
    return this.powerSavingMode
  }

  setPowerSavingMode(setting) {
    this.powerSavingMode = false;
  }
}


module.exports = Thermostat;