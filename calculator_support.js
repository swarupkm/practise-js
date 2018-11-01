

var add = function (a,num) {
    return a + num;
}


var multiply = function(a,num) {
    return a * num;
}



var addNumbers = (nums) => {
    return nums.reduce(add);
}

var multiplyNumbers = (nums) => {
    return nums.reduce(multiply)
}

module.exports = {addNumbers , multiplyNumbers}