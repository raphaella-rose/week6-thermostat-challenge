const Thermostat = require('./thermostat');

describe(Thermostat, () => {
  it('starts with an initial temp of 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.temp()).toBe(20);
  })

  it('you can increase the temperature with an up method', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.temp()).toEqual(21);
  })

  it('you can decrease the temperature with a down method', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.temp()).toEqual(19);
  })

  it('power saving mode is on by default', () => {
    const thermostat = new Thermostat();
    expect(thermostat.isPowerSavingOn()).toBe(true);
  })

  it('user can turn power saving mode off', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    expect(thermostat.isPowerSavingOn()).toBe(false);
  })

  it('the maximum temp with powersaving mode on is 25 degrees', () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 10; i++) {
      thermostat.up()
    };
    expect(thermostat.temp()).toEqual(25);
  })

  it('the maximum temp with powersaving mode off is 32 degrees', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 20; i++) {
      thermostat.up();
    };
    expect(thermostat.temp()).toEqual(32);
  })

  it('the minimum possible temperature is 10 degrees', () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 15; i++) {
      thermostat.down();
    };
    expect(thermostat.temp()).toEqual(10);
  })

  it('the user can reset to default temp', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temp()).toBe(20);
  })

  it('user can see current energy usage when medium-usage', () => {
    const thermostat = new Thermostat();
    expect(thermostat.currentEnergyUsage()).toBe('medium-usage');
  })

  it('user can see current energy usage when low-usage', () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 5; i++) {
      thermostat.down();
    };
    expect(thermostat.currentEnergyUsage()).toBe('low-usage');
  })

  it('user can see current energy usage when high-usage', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    };
    expect(thermostat.currentEnergyUsage()).toBe('high-usage');
  })

  it('can turn power mode off then on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.setPowerSavingMode(true);
    expect(thermostat.isPowerSavingOn()).toBe(true)
  })

})