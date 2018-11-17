const calcSupport = require('./calculator_support');
const prints = require('./custom_prints');


const data1 = [1, 2];
const data2 = [4, 5, 6];

prints.print1(data1, calcSupport.addNumbers);
prints.print2(data2, calcSupport.multiplyNumbers);
