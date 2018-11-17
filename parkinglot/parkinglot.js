const createParkingLot = ({ size }) => {
  const EMPTY = null;
  let availableSlots = size;
  const lot = {};
  for (let i = 1; i <= size; i += 1) { lot[i] = EMPTY; }

  return {
    size: Object.keys(lot).length,

    park: (car) => {
      if (availableSlots === 0) throw Error('Parking Lot is Full');

      for (let i = 1; i <= size; i += 1) {
        if (lot[i] === EMPTY) {
          lot[i] = car;
          availableSlots -= 1;
          return;
        }
      }
    },

    availableSlots: () => availableSlots,

    getCarAtSlot: slotNumber => lot[slotNumber],

  };
};

module.exports = { createParkingLot };
