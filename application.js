const readlineSync = require("readline-sync");

const text = readlineSync.question("Enter a word or phrase: ");

const index = readlineSync.questionInt("Enter an index number to find the character at that index");

const character = text[index];

console.log(`The character at index ${index} is: "${character}"`);