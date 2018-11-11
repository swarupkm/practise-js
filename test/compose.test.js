const { compose } = require('../compose');

describe('compose', () => {
  it('should compose a function righto left', () => {
    const minu2 = num => num - 2;
    const times2 = num => num * 2;
    const result = compose(times2, minu2)(4);
    expect(result).not.toBe(6);
    expect(result).toBe(4);
  });

  it('should compose a function with one function', () => {
    const minu2 = num => num - 2;
    const result = compose(minu2)(4);
    expect(result).toBe(2);
  });

  it('should compose a function with more than one function', () => {
    const minu1 = num => num - 1;
    const times2 = num => num * 2;
    const result = compose(times2, minu1)(4);
    expect(result).toBe(6);
  });
});
