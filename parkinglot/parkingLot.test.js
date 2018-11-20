const { createParkingLot } = require('./parkingLot');
const { createCar } = require('./car');

describe('parkingLot', () => {
  it('should create a parking lot of certain size', () => {
    const lot = createParkingLot({ size: 6 });
    expect(lot.size).toBe(6);
  });

  it('should park car in a parking lot ', () => {
    const lot = createParkingLot({ size: 6 });
    const car = createCar({ regNumber: '123123', color: 'white' });
    expect(lot.nextAvailableSlot()).toBe(1);
    lot.park(car);
    expect(lot.availableSlots()).toBe(5);
    expect(lot.nextAvailableSlot()).toBe(2);
    expect(lot.getCarAtSlot(1)).toEqual(car);
  });

  it('should thow error if parking lot is full and car is parked', () => {
    const lot = createParkingLot({ size: 1 });
    const car1 = createCar({ regNumber: '123123', color: 'white' });
    const car2 = createCar({ regNumber: '321321', color: 'blue' });
    lot.park(car1);
    expect(lot.availableSlots()).toBe(0);
    expect(lot.nextAvailableSlot()).toBeNull();
    expect(() => { lot.park(car2); }).toThrow();
  });

  it('should leave a car and make slot empty', () => {
    const lot = createParkingLot({ size: 1 });

    lot.park({ regNumber: '123123', color: 'white' });
    lot.leave(1);

    expect(lot.availableSlots()).toBe(1);
    expect(lot.getCarAtSlot(1)).toBeNull();
  });

  it('should not try to empty the slot if it already empty', () => {
    const lot = createParkingLot({ size: 1 });

    lot.leave(1);
    lot.leave(1);

    expect(lot.availableSlots()).toBe(1);
    expect(lot.getCarAtSlot(1)).toBeNull();
  });
});
