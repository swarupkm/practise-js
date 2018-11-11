const countdown = (num) => {
  if (num > 1000000) {
    console.log('Done!!!!!');
    return;
  }
  console.log(num);
  countdown(num * 2);
};

countdown(100);


const multiply = (number, times) => {
  if (times === 1) return number;
  return number + multiply(number, times - 1);
};

console.log(multiply(10, 20));
console.log(multiply(-10, 20));
console.log(multiply(-10, -20));
