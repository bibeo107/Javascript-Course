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
