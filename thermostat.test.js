const Thermostat = require('./thermostat');

describe(Thermostat, () => {
  it('starts with an initial temp of 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.temp()).toBe(20);
  })

  it('you can increase the temperature with an up method', () => {
    const thermostat = new Thermostat();
    thermostat.up(10);
    expect(thermostat.temp()).toEqual(30)
  })
})