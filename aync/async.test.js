const { someAsyncFunction } = require('./someAsyncFunction');

describe('async', () => {
  it('assertUserCount', () => someAsyncFunction().then((data) => {
    expect(data).toBe(5);
  }));

  it('getCount', async () => {
    const op = await someAsyncFunction();
    expect(op).toBe(5);
  });
});
