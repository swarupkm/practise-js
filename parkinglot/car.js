function validateColor(color) {
  if (!color) throw Error();

  const validColorList = ['white', 'blue', 'red'];
  if (!validColorList.includes(color.toLowerCase())) throw Error();
}

function validateRegNumber(regNumber) {
  if (!regNumber) throw Error();
}

const createCar = ({ regNumber, color }) => {
  validateRegNumber(regNumber);
  validateColor(color);
  return {
    regNumber,
    color,
  };
};

module.exports = { createCar };
