/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
console.log(`\x1b[1m%s\x1b[0m`, `\n for loop ---------------------------------------------`);

const arrayOfNumbers = [];
for (let value = 10; value <= 50; value += 10) {
    arrayOfNumbers.push(value);
}
console.log(arrayOfNumbers);

//----------------------------------------------------------------
const iterations = 1000_000;
const myArray = Array.from(Array(iterations).keys());

let totalForLoop = 0;
const startForLoop = performance.now();
for (let i = 0; i < myArray.length; i += 1) {
    totalForLoop += myArray[i];
}
const endForLoop = performance.now();

console.log(`For: ${endForLoop - startForLoop} ms.`);

//----------------------------------------------------------------
let totalForInLoop = 0;
const startForInLoop = performance.now();
for (const i in myArray) {
    totalForInLoop += myArray[i];
}
const endForInLoop = performance.now();

console.log(`For...In: ${endForInLoop - startForInLoop} ms.`);

//----------------------------------------------------------------
let totalForOfLoop = 0;
const startForOfLoop = performance.now();
for (const value in myArray) {
    totalForOfLoop += value;
}
const endForOfLoop = performance.now();

console.log(`For...Of: ${endForOfLoop - startForOfLoop} ms.`);
//----------------------------------------------------------------
let totalForEach = 0;
const startForEach = performance.now();
myArray.forEach((element) => {
    totalForEach += element;
});
const endForEach = performance.now();

console.log(`For...Eeach: ${endForEach - startForEach} ms.`);

//----------------------------------------------------------------
let totalMap = 0;
const startMap = performance.now();
myArray.map((number) => {
    totalMap += number;
    return totalForEach;
});
const endMap = performance.now();
console.log(`Map: ${endMap - startMap} ms.`);
