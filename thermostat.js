class Thermostat {
  constructor() {
    this.currentTemp = 20;
  }

  temp() {
    return this.currentTemp;
  }

  up() {
    this.currentTemp += 1;
  }

  down() {
    this.currentTemp -= 1;
  }

  isPowerSavingOn() {
    return true
  }
}

module.exports = Thermostat;