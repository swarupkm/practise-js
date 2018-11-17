const print1 = (data, callback) => {
  console.log('############################');
  console.log(`Performing callback ${callback.name}`);
  const op = callback(data);
  console.log(`The result is ${op}`);
};

const print2 = (data, callback) => {
  console.log('############################');
  console.log(`RRRRRRRRRRRRRRRRRRRRRRRR ${callback.name}`);
  const op = callback(data);
  console.log(`OPPPPPPPPPPP ${op}`);
};

module.exports = { print1, print2 };
