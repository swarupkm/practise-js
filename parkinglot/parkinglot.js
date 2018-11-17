const createParkingLot = ({ size }) => {
  const NO_CAR = null;
  let availableSlots = size;
  const lot = {};
  for (let i = 1; i <= size; i += 1) { lot[i] = NO_CAR; }

  return {
    size: () => Object.keys(lot).length,

    park: (car) => {
      if (availableSlots === 0) throw Error('Parking Lot is Full');

      for (let i = 1; i <= size; i += 1) {
        if (lot[i] === NO_CAR) {
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
