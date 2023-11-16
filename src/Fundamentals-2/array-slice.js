console.group(`\x1b[1m%s\x1b[0m`, `\n Array.slice()() ---------------`);
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(`fruits: `, fruits);
console.log(`fruits.length: `, fruits.length);
console.log(`fruits.slice(2): `, fruits.slice(2));
console.log(`fruits.slice(1, 3):`, fruits.slice(1, 3)); // [ 'Orange', 'Lemon' ]
console.log(`fruits.slice(-2): `, fruits.slice(-2));
console.log(`fruits.slice(2, -1): `, fruits.slice(2, -1));
console.log(`fruits.slice(0, 4): `, fruits.slice(0, 4));
console.log(`fruits.slice(0, 5): `, fruits.slice(0, 5));
console.log(`fruits.slice(-5, -2): `, fruits.slice(-5, -2));
console.groupEnd();
