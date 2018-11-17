const someAsyncFunction = () => new Promise((resolve) => {
  setTimeout(() => {
    console.log('waiting for a second');
    resolve(5);
  }, 1000);
});
// Promise
const assertUserCount = () => {
  someAsyncFunction().then((data) => {
    console.log(data === 5);
  });
};
// Async Await
const getCount = async () => {
  const op = await someAsyncFunction();
  console.log(op === 5);
};

assertUserCount();
getCount();

module.exports = { someAsyncFunction };
