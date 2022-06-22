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

  // it('the minimum possible temperature is 10 degrees', () => {
  //   const thermostat = new Thermostat();
  //   for (let i = 0; i)
  //   thermostat.down();
  //   expect(thermostat.temp()).toEqual(10);
  // })
})