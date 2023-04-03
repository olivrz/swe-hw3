
// Part 1: Recursively count lines
function countRecursively(str, cntObj) {
    if(str.length === 0) {
        cntObj.numLines++;
        cntObj.numWords--;
        return cntObj;
    }
    if(str[0] === '\n') cntObj.numLines++;
    if(str[0] === ' ' || str[0] === '\n' || str[0] === '\r') cntObj.numWords++;
    cntObj.numChars++;
    return countRecursively(str.split('').slice(1).join(''), cntObj)
}
/*console.log(countRecursively(input, {
    numChars: 0,
    numLines: 0,
    numWords: 0
}))*/


// Part 2: Use array methods to count lines
function countArray(str) {
    const numLines = str.split('').reduce( (accumulator, currChar) => { return currChar === '\n' ? accumulator += 1 : accumulator }, 1 )
    const numChars = str.split('').reduce( (accumulator, currChar) => { return accumulator += 1 }, 0 )
    const numWords = str.split('').reduce( (accumulator, currChar) => { return currChar === ' ' || currChar === '\r' || currChar === '\n' ? accumulator += 1 : accumulator }, 0 ) - 1;
    return {
        numChars: numChars,
        numLines: numLines,
        numWords: numWords
    }
}
//console.log(countArray(input))

module.exports = { countRecursively, countArray }