/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// Lecture: Array
//-------------------------------------
console.log(
    `\x1b[1m%s\x1b[0m`,
    `\n------------------------------ Lecture: Array ------------------------------`
);
console.log(`\x1b[1m%s\x1b[0m`, `Create array from string using split()`);

const fruitString = 'apple, banana, lemon, lime, pear, coconut';
console.log(`fruitString:`, fruitString);
console.log(`fruitString.split(','):`, fruitString.split(','));

console.log(`\x1b[1m%s\x1b[0m`, `\n array.join() ---------------------------------------------`);
const animals = ['Lion', 'Tiger', 'Koala', 'Dophin'];
console.log(`animals.join():`, animals.join());
console.log(`animals.join(''):`, animals.join(''));
console.log(`animals.join(', '):`, animals.join(', '));
console.log(`animals.join('-'):`, animals.join('-'));

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

// start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
const extendedArrayLength = fruits.length + 1;
console.log(
    `fruits.splice(fruits.length + 1, 1, 'Lemon', 'Lime')`,
    fruits.splice(extendedArrayLength, 0, 'Lychee', 'Mango')
);
console.log(`fruits:`, fruits);

//-------------------------------------
console.log(
    `\x1b[1m%s\x1b[0m`,
    `\n array.toSpliced() ---------------------------------------------`
);

const firstNames = ['Vu', 'Van', 'Vo', ' Vuong'];

console.log(`\x1b[1m%s\x1b[0m`, `Inserting an element at index 1`);
console.log(`firstNames`, firstNames);
console.log(`firstNames.toSpliced(1, 0, 'Nguyen')`, firstNames.toSpliced(1, 0, 'Nguyen'));

console.log(`\x1b[1m%s\x1b[0m`, `\nDeleting two elements starting from index 2`);
console.log(`firstNames`, firstNames);
const modifiedNames = firstNames.toSpliced(2, 2);
console.log(`firstNames.toSpliced(2, 2)`, modifiedNames);

const lastNames = ['Thuy', 'Thu', 'Thang'];
console.log(`lastNames`, lastNames);
console.log(`lastNames.toSpliced(2, 2)`, lastNames.toSpliced(2, 2));

console.log(`\x1b[1m%s\x1b[0m`, `\nReplacing one element at index 1 with two new elements`);
console.log(`firstNames`, firstNames);
console.log(
    `firstNames.toSpliced(1, 1, 'Hoang', 'Pham')`,
    firstNames.toSpliced(1, 1, 'Hoang', 'Pham')
);

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
