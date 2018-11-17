function compose(...funcs) {
  return (num) => {
    let res = num;
    funcs.reverse().forEach((func) => {
      res = func(res);
    });
    return res;
  };
}

module.exports = { compose };
