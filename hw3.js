const fs = require('fs');

let input = '';

// Read the file as text
try {
    input = fs.readFileSync('./input/test1.txt', 'utf8');
} catch(err) {
    console.log(err)
}

// Part 1: Recursively count lines
function countRecursively(str, cntObj) {
    if(str.length === 0) return cntObj;
    if(str[0] === '\n') cntObj.numLines++;
    if(str[0]=== ' ') cntObj.numWords++;
    cntObj.numChars++;
    return countRecursively(str.split('').slice(1).join(''), cntObj)
}
console.log(countRecursively(input, {
    numChars: 0,
    numLines: 0,
    numWords: 0
}))


// Part 2: Use array methods to count lines
function countLinesArray(str) {
    return str.split('').reduce( (accumulator, currChar) => { return currChar === '\n' ? accumulator += 1 : accumulator }, 0 )
}
console.log(countLinesArray(input))

//Part 3: Use split to count lines
function countLinesSplit(str) {
    return str.split('\n').length - 1;
}
console.log(countLinesSplit(input));

