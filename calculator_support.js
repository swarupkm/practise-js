

function add(a, num) {
  return a + num;
}


function multiply(a, num) {
  return a * num;
}


const addNumbers = nums => nums.reduce(add);

const multiplyNumbers = nums => nums.reduce(multiply);

module.exports = { addNumbers, multiplyNumbers };
