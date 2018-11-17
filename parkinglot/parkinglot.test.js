const { createParkingLot } = require('./parkinglot');
const { createCar } = require('./car');

describe('parkinglot', () => {
  it('should create a parking lot of certain size', () => {
    const lot = createParkingLot({ size: 6 });
    expect(lot.size).toBe(6);
  });

  it('should park car in a parking lot ', () => {
    const lot = createParkingLot({ size: 6 });
    const car = createCar({ regNumber: '123123', color: 'white' });
    lot.park(car);
    expect(lot.availableSlots()).toBe(5);
    expect(lot.getCarAtSlot(1)).toEqual(car);
  });

  it('should thow error if parking lot is full and car is parked', () => {
    const lot = createParkingLot({ size: 1 });
    const car1 = createCar({ regNumber: '123123', color: 'white' });
    const car2 = createCar({ regNumber: '321321', color: 'blue' });
    lot.park(car1);
    expect(lot.availableSlots()).toBe(0);
    expect(() => { lot.park(car2); }).toThrow();
  });
});
