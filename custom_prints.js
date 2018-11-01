var print1 = (data, callback) => {
    console.log('############################');
    console.log(`Performing callback ${callback.name}`);
    var op = callback(data);
    console.log('The result is ' + op);
}

var print2 = (data, callback) => {
    console.log('############################');
    console.log(`RRRRRRRRRRRRRRRRRRRRRRRR ${callback.name}`);
    var op = callback(data);
    console.log('OPPPPPPPPPPP ' + op)
}

module.exports = {print1 , print2}