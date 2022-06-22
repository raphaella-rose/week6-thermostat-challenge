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
    } else if (!this.isPowerSavingOn() && this.currentTemp > 32) {
      this.currentTemp = 32;
    }
  }

  down() {
    this.currentTemp -= 1;
    if (this.currentTemp < 10) {
      this.currentTemp = 10;
    }
  }

  isPowerSavingOn() {
    return this.powerSavingMode
  }

  setPowerSavingMode(setting) {
    this.powerSavingMode = false;
  }
}


module.exports = Thermostat;