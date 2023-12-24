console.group(`\x1b[1m%s\x1b[0m`, `\n Array.slice()() ---------------`);
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(`fruits.length: `, fruits.length);
console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(): `, fruits.slice());

console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(0): `, fruits.slice(0));

console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(0, 4): `, fruits.slice(0, 4));

console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(0, 5): `, fruits.slice(0, 5));

console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(2): `, fruits.slice(2));

console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(1, 3):`, fruits.slice(1, 3));

console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(-2): `, fruits.slice(-2));

console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(-6): `, fruits.slice(-6));

console.log(`\nfruits: `, fruits);
console.log(`fruits.slice(2, -1): `, fruits.slice(2, -1));
console.log(`\nfruits: `, fruits);

console.log(`fruits.slice(-5, -2): `, fruits.slice(-5, -2));

// 1. USE ARRAY SLICE TO COPY AN ARRAY
console.group(`\x1b[1m%s\x1b[0m`, `\n1. USE ARRAY SLICE TO COPY AN ARRAY`);
console.log('copy array: ', fruits.slice(0));
console.groupEnd();

// 2. USE ARRAY SLICE TO GET THE (FIRST N / LAST N) ELEMENT OF AN ARRAY
console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n2. USE ARRAY SLICE TO GET THE (FIRST N / LAST N) ELEMENT OF AN ARRAY`
);
console.log(`fruits: `, fruits);
console.log(`Get first 3 elements in array: `, fruits.slice(0, 3));
console.log(`Get last 3 elements in array: `, fruits.slice(-3));
console.groupEnd();

// Remove element at specific index using slice method
console.group(`\x1b[1m%s\x1b[0m`, `\n2. USE ARRAY SLICE TO REMOVE AN ELEMENT AT A SPECIFIC INDEX`);
const removeElementAtIndex = (array, index) => {
    if (index >= 0 && index <= array.length)
        return array.slice(0, index).concat(array.slice(index + 1));
    throw new Error('Invalid Index');
};
console.log(`fruits: `, fruits);
console.log(`removeElementAt(fruits, 2): `, removeElementAtIndex(fruits, 2));

console.groupEnd();
