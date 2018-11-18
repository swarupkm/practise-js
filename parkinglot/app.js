const fs = require('fs');
const { processInstruction } = require('./parser');
const parkingLot = require('./parkingLot');


const filePath = `${__dirname}/${process.argv[2]}`;
let instructions = [];

if (filePath && fs.existsSync(filePath)) {
  instructions = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line !== '');
  instructions.forEach(instruction => console.log(processInstruction(instruction, parkingLot)));
} else {
  const stdin = process.openStdin();
  stdin.addListener('data', (d) => {
    const instruction = d.toString().trim();
    console.log(processInstruction(instruction, parkingLot));
  });
}
