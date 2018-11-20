const parser = require('./parser');

describe('parser', () => {
  const parkingLot = {};
  const lot = {
    size: 6,
    park: jest.fn(),
    nextAvailableSlot: jest.fn().mockReturnValue(1),
    leave: jest.fn(),
  };

  beforeEach(() => {
    parkingLot.createParkingLot = jest.fn().mockReturnValue(lot);
  });

  it('should create a parking lot', () => {
    parser.processInstruction('create_parking_lot 6', parkingLot);

    const result = parser.processInstruction('create_parking_lot 6', parkingLot);

    expect(parkingLot.createParkingLot).toHaveBeenCalledWith({ size: 6 });
    expect(result).toBe('Created a parking lot with 6 slots');
  });

  it('should park a car', () => {
    const result = parser.processInstruction('park KA-01-HH-1234 White', parkingLot);

    expect(lot.park).toHaveBeenCalledWith({ regNumber: 'KA-01-HH-1234', color: 'White' });
    expect(result).toBe('Allocated slot number: 1');
  });

  it('should print failure message when parking lot is full', () => {
    lot.nextAvailableSlot = jest.fn().mockReturnValue(null);
    parkingLot.createParkingLot = jest.fn().mockReturnValue(lot);

    const result = parser.processInstruction('park KA-01-HH-1234 White', parkingLot);
    expect(result).toBe('Sorry, parking lot is full');
  });

  it('should leave a car from provided slot ', () => {
    const result = parser.processInstruction('leave 4', parkingLot);

    expect(lot.leave).toHaveBeenCalledWith(4);
    expect(result).toBe('Slot number 4 is free');
  });

  it('should show status ', () => {
    lot.getCarAtSlot = jest.fn((slotNumber) => {
      const data = {
        1: { regNumber: 'KA-01-HH-1234', color: 'White' },
        3: { regNumber: 'KA-01-HH-2701', color: 'Blue' },
      };
      return data[slotNumber];
    });
    parkingLot.createParkingLot = jest.fn().mockReturnValue(lot);

    const result = parser.processInstruction('status', parkingLot);

    expect(result).toBe('Slot No. Registration No Color\n1 KA-01-HH-1234 White\n3 KA-01-HH-2701 Blue\n');
  });

  it('should print the Reg Numbers of a specific color of car', () => {
    lot.getCarAtSlot = jest.fn((slotNumber) => {
      const data = {
        1: { regNumber: 'KA-01-HH-1234', color: 'White' },
        2: { regNumber: 'KA-01-HH-2701', color: 'Blue' },
        3: { regNumber: 'KA-01-HH-9999', color: 'White' },
      };
      return data[slotNumber];
    });

    parkingLot.createParkingLot = jest.fn().mockReturnValue(lot);

    const result = parser.processInstruction('registration_numbers_for_cars_with_colour White', parkingLot);

    expect(result).toBe('KA-01-HH-1234, KA-01-HH-9999');
  });

  it('should print the slot numbers of a specific color of car', () => {
    lot.getCarAtSlot = jest.fn((slotNumber) => {
      const data = {
        1: { regNumber: 'KA-01-HH-1234', color: 'White' },
        2: { regNumber: 'KA-01-HH-2701', color: 'Blue' },
        3: { regNumber: 'KA-01-HH-9999', color: 'White' },
      };
      return data[slotNumber];
    });

    parkingLot.createParkingLot = jest.fn().mockReturnValue(lot);

    const result = parser.processInstruction('slot_numbers_for_cars_with_colour White', parkingLot);

    expect(result).toBe('1, 3');
  });

  it('should print the reg number of a car in specific slot', () => {
    lot.getCarAtSlot = jest.fn((slotNumber) => {
      const data = {
        2: { regNumber: 'KA-01-HH-2701', color: 'Blue' },
      };
      return data[slotNumber];
    });

    parkingLot.createParkingLot = jest.fn().mockReturnValue(lot);

    const result = parser.processInstruction('slot_number_for_registration_number KA-01-HH-2701', parkingLot);

    expect(result).toBe(2);
  });

  it('should print "Not found" while asking for slot number for non existing reg number', () => {
    lot.getCarAtSlot = jest.fn((slotNumber) => {
      const data = {
        2: { regNumber: 'XXXXXXXXXXXX', color: 'Blue' },
      };
      return data[slotNumber];
    });

    parkingLot.createParkingLot = jest.fn().mockReturnValue(lot);

    const result = parser.processInstruction('slot_number_for_registration_number KA-01-HH-2701', parkingLot);

    expect(result).toBe('Not found');
  });
});
