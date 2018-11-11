
const someAsyncFunction = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('waiting for a second');
    resolve(5);
  }, 1000);
});

// Normal
const assertUserCount = () => {
  someAsyncFunction().then((data) => {
    console.log(data === 5);
  });
};

const getCount = async () => {
  const op = await someAsyncFunction();
  console.log(op === 5);
};

assertUserCount();
getCount();


// Testing
it('assertUserCount', () => someAsyncFunction().then((data) => {
  console.log(data === 5);
  expect(data).toBe(5);
}));

it('getCount', async () => {
  const op = await someAsyncFunction();
  console.log(op === 5);
  expect(op).toBe(5);
});
