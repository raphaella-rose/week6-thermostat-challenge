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

  reset() {
   this.currentTemp = 20;
  }

  currentEnergyUsage() {
   if (this.currentTemp < 18) {
    return 'low-usage'
   } else if (this.currentTemp <= 25) {
    return 'medium-usage'
   }else {
    return 'high-usage'
   }
  
  }
}


module.exports = Thermostat;