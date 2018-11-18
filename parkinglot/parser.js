let parkingLot = null;
let lot = null;

const createParkingLot = (_size) => {
  lot = parkingLot.createParkingLot({ size: parseInt(_size, 10) });
  return `Created a parking lot with ${_size} slots`;
};

const park = ((regNumber, color) => {
  const slotNumber = lot.nextAvailableSlot();
  if (slotNumber === null) {return 'Sorry, parking lot is full'}
  lot.park({ regNumber, color });
  return `Allocated slot number: ${slotNumber}`;
});

const leave = (slotNumber) => {
  lot.leave(parseInt(slotNumber, 10));
  return `Slot number ${slotNumber} is free`;
};

const status = () => {
  let op = 'Slot No. Registration No Color\n';

  for (let i = 1; i <= lot.size; i += 1) {
    const car = lot.getCarAtSlot(i);
    if (car) {
      op += `${i} ${car.regNumber} ${car.color}\n`;
    }
  }
  return op;
};

const instructions = {
  create_parking_lot: createParkingLot,
  park,
  leave,
  status,
  // registration_numbers_for_cars_with_colour,
  // slot_numbers_for_cars_with_colour,
  // slot_number_for_registration_number
};

const processInstruction = (instruction, _parkingLot) => {
  parkingLot = _parkingLot;
  const [method, ...args] = instruction.split(' ');
  return instructions[method](...args);
};

module.exports = { processInstruction };
