class Thermostat {
  constructor() {
    this.currentTemp = 20;
  }

  temp() {
    return this.currentTemp;
  }

  up(amount) {
    this.currentTemp += amount;
  }
}

module.exports = Thermostat;