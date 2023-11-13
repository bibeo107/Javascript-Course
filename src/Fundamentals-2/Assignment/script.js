/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// Lecture: function --------------------------------------------------------
function describeCountry(country, popuation, capitalCity) {
    return `${country} has ${popuation} milion people and its capital city is ${capitalCity}`;
}
const describleIndia = describeCountry('India', 'New Delhi', 1430);
const describleJapan = describeCountry('Japan', 'Tokyo', 14);
const describleIndonesia = describeCountry('Indonesia', 'Jakarta', 15);
console.log(describleIndia, describleJapan, describleIndonesia);

const worldPopulation = 7900;

// function declarations ----------------------------------------------------------------
function percentageOfWorld1(popuation) {
    return (popuation / worldPopulation) * 100;
}
const percentIndia = percentageOfWorld1(1430);
const percentJapan = percentageOfWorld1(14);
const percentIndonesia = percentageOfWorld1(15);

console.log(percentIndia, percentJapan, percentIndonesia);

// function expressions
//----------------------------------------------------------------
const percentageOfWorld2 = function percentageOfWorld2(popuation) {
    return (popuation / worldPopulation) * 100;
};
const percentIndia1 = percentageOfWorld2(1430);
const percentJapan1 = percentageOfWorld2(14);
const percentIndonesia1 = percentageOfWorld2(15);

console.log(percentIndia1, percentJapan1, percentIndonesia1);

// arrow functions ------------------------------------------------------------------------------
const percentageOfWorld3 = (popuation) => {
    return (popuation / worldPopulation) * 100;
};
const percentIndia2 = percentageOfWorld2(1430);
const percentJapan2 = percentageOfWorld2(14);
const percentIndonesia3 = percentageOfWorld2(15);

console.log(percentIndia1, percentJapan1, percentIndonesia1);

// Higher Order Functions
// treat function as values. ----------------------------------------------------------------

function dog() {
    console.log('woof');
}

const sausageDog = dog;

sausageDog();
dog();

// passing functions as arguments
// Example: filer array ----------------------------------------------------------------
const filterArray = function filterArray(array, filterFunction) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (filterFunction(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};

const isEven = function isEven(number) {
    return number % 2 === 0;
};

const isOld = function isOld(number) {
    return number % 2 === 1;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filterArray(numbers, isEven);
let oldNumbers = filterArray(numbers, isOld);

console.log(`Even numbers:`, evenNumbers);
console.log(`Old numbers:`, oldNumbers);

// Use array method
evenNumbers = numbers.filter((number) => number % 2 === 0);
oldNumbers = numbers.filter((number) => number % 2 === 1);

console.log(`Even numbers (Use array method):`, evenNumbers);
console.log(`Old numbers (Use array method):`, oldNumbers);

// function can be returned from other function ----------------------------------------------------------------

function multiplyBy(factor) {
    return function multiply(number) {
        return number * factor;
    };
}

let result = multiplyBy(2);
console.log(result(10));
console.log(result(20));

result = multiplyBy(3);
console.log(result(10));
console.log(result(20));

console.log('\x1b[1m%s\x1b[0m', `Challenge 1`);
const calcAverage = (first, second, third) => (first + second + third) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log(`No team wins!`);
    }
};

// DATA1
let scroreDolphins = calcAverage(44, 23, 71);
let scroreKoalas = calcAverage(65, 54, 49);
checkWinner(scroreDolphins, scroreKoalas);

// DATA2
scroreDolphins = calcAverage(85, 54, 41);
scroreKoalas = calcAverage(23, 34, 27);
checkWinner(scroreDolphins, scroreKoalas);

// Lecture: Array
//-------------------------------------
console.log(
    `\x1b[1m%s\x1b[0m`,
    `\n------------------------------ Lecture: Array ------------------------------`
);

// push & pop like LIFO ---------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n array.push() ---------------------------------------------`);
const fruits = ['Cherry'];
console.log(`fruits`, fruits);
const addLastElement = fruits.push('Kiwi');
console.log(`fruits.push('Kiwi')`, addLastElement);
console.log(`fruits:`, fruits);

const addLastElements = fruits.push('Orange', 'Pineapple');
console.log(`\nfruits.push('Orange, Pineapple'):`, addLastElements);
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `\n array.pop() ---------------------------------------------`);
console.log(`fruits:`, fruits);
const lastElements = fruits.pop();
console.log('fruits.pop():', lastElements);
console.log(`fruits:`, fruits);

const emptyArray = [];
console.log(`\nemptyArray:`, emptyArray);
console.log(`emptyArray.pop():`, emptyArray.pop());

// unshift & shift like FIFO ---------------------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n array.unshift() ---------------------------------------------`);
console.log(`fruits:`, fruits);
console.log(`fruits.unshift('Apple', 'Banana')`, fruits.unshift('Apple', 'Banana'));
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `\n array.shift() ---------------------------------------------`);
const firstElement = fruits.shift();
console.log(`fruits.shift()`, firstElement);
console.log(`fruits:`, fruits);

console.log(`\nemptyArray:`, emptyArray);
console.log(`emptyArray.unshift():`, emptyArray.shift());

console.log(`\x1b[1m%s\x1b[0m`, `\n array.splice() ---------------------------------------------`);
console.log(`\x1b[1m%s\x1b[0m`, `Delete midle elements`);
console.log(`fruits:`, fruits);
const deleteItems = fruits.splice(1, 2);
console.log(`fruits.splice(1, 2);`, deleteItems);
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `Add elements into midle array`);
console.log(`fruits:`, fruits);
console.log(`fruits.splice(1, 0, 'Apple', 'Avocado')`, fruits.splice(1, 0, 'Apple', 'Avocado'));
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `Replace elements into midle array`);
console.log(`fruits:`, fruits);
const replaceItems = fruits.splice(1, 2, 'Peach', 'Pear');
console.log(`fruits.splice(1, 2, 'Peach', 'Pear')`, replaceItems);
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `Delete last 2 elements from the end`);
console.log(`fruits:`, fruits);
console.log(`fruits.splice(-2);`, fruits.splice(-2));
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `Nothing is deleted`);
console.log(`fruits:`, fruits);
console.log(`fruits.splice();`, fruits.splice());
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `Delete all elements`);
console.log(`fruits:`, fruits);
console.log(`fruits.splice(0);`, fruits.splice(0));
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `\nAdd items into first array`);
console.log(`fruits:`, fruits);
console.log(
    `fruits.splice(0, 0, 'Longan', 'Watermelon')`,
    fruits.splice(0, 0, 'Longan', 'Watermelon')
);
console.log(`fruits:`, fruits);

console.log(`\x1b[1m%s\x1b[0m`, `\nAdd items into last array`);
console.log(`fruits:`, fruits);
console.log(
    `fruits.splice(fruits.length, 0, 'Lemon', 'Lime')`,
    fruits.splice(fruits.length, 0, 'Lemon', 'Lime')
);
console.log(`fruits:`, fruits);

/// / start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
const extendedArrayLength = fruits.length + 1;
console.log(
    `fruits.splice(fruits.length + 1, 1, 'Lemon', 'Lime')`,
    fruits.splice(extendedArrayLength, 0, 'Lychee', 'Mango')
);
console.log(`fruits:`, fruits);

//-------------------------------------
console.log(`\x1b[1m%s\x1b[0m`, `\n Array.at() ---------------------------------------------`);

const array = [1, 2, 'three', 4, 5, false];
console.log(array);
console.log('array.at(0):', array.at(0));
console.log('array.at(2):', array.at(2));
console.log('array.at(-1):', array.at(-1));
console.log('array.at(-3):', array.at(-3));
console.log('array.at(0.6):', array.at(0.6));
console.log('array.at(3.6):', array.at(3.6));
console.log('array.at(7):', array.at(7));

// Example practice:
console.log(`\x1b[1m%s\x1b[0m`, `\nrock-paper-scissors`);
const computerOptions = ['rock', 'paper', 'sissors'];
const randomIndex = Math.random() * computerOptions.length;
console.log('Item result is: ', computerOptions.at(randomIndex));

//-------------------------------------
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
