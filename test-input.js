const fs = require('fs');
const { countRecursively, countArray } = require('./hw3')

const tests = [
    {
        inputPath: './input/test1.txt',
        expectedValues: {
            numChars: 853,
            numLines: 8,
            numWords: 144
        }
    },
    {
        inputPath: './input/test2.txt',
        expectedValues: {
            numChars: 52,
            numLines: 3,
            numWords: 10
        }
    }
]

const testInput = ( inputPath, expectedValues ) => {
    let input = '';
    // Read the file as text
    try {
        input = fs.readFileSync(inputPath, 'utf8');
    } catch(err) {
        console.log(err)
    }

    const recursiveOutput = countRecursively(input, {
        numChars: 0,
        numLines: 0,
        numWords: 0
    })
    const arrayOutput = countArray(input);

    console.log(`${inputPath} results: `)
    console.log(`\t Recursive output: `)
    console.log(`\t\t numChars ${recursiveOutput.numChars === expectedValues.numChars}\t\t got ${recursiveOutput.numChars}\t\t expected ${expectedValues.numChars}`)
    console.log(`\t\t numLines ${recursiveOutput.numLines === expectedValues.numLines}\t\t got ${recursiveOutput.numLines}\t\t expected ${expectedValues.numLines}`)
    console.log(`\t\t numWords ${recursiveOutput.numWords === expectedValues.numWords}\t\t got ${recursiveOutput.numWords}\t\t expected ${expectedValues.numWords}`)

    console.log(`\t Array method output: `)
    console.log(`\t\t numChars ${arrayOutput.numChars === expectedValues.numChars}\t\t got ${arrayOutput.numChars}\t\t expected ${expectedValues.numChars}`)
    console.log(`\t\t numLines ${arrayOutput.numLines === expectedValues.numLines}\t\t got ${arrayOutput.numLines}\t\t expected ${expectedValues.numLines}`)
    console.log(`\t\t numWords ${arrayOutput.numWords === expectedValues.numWords}\t\t got ${arrayOutput.numWords}\t\t expected ${expectedValues.numWords}`)

}

const runTests = tests => {
    tests.forEach( test => {
        testInput(test.inputPath, test.expectedValues)
    } )
}

runTests(tests);