const fs = require('fs');

let inputData = '';

// Read the file as text
fs.readFile('./input/test1.txt', 'utf8', function(err, readInput) {
    if (err) throw err;
    inputData = readInput;
});
// Part 1: Recursively count lines, characters, and