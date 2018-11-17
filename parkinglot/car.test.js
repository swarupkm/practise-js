const { createCar } = require('./car');

describe('car', () => {
  it('should not create a car if has wrong color', () => {
    expect(() => { createCar({ regNumber: '123132', color: 'addas' }); })
      .toThrow();
  });

  it('should not create car when reg number or color is not provided', () => {
    expect(() => { createCar({ regNumber: '123132' }); })
      .toThrow();
    expect(() => { createCar({ color: 'addas' }); })
      .toThrow();
  });

  it('should create car for valid colors', () => {
    const validColorList = ['white', 'blue', 'red'];
    validColorList.forEach((color) => {
      expect(() => { createCar({ regNumber: '123123', color }); })
        .not.toThrowError();
    });
  });
});
