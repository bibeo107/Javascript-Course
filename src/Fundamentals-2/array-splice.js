console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n array.splice() ---------------------------------------------`
);
const fruits = ['apple', 'banana', 'pear', 'coconut'];

console.group(`\x1b[1m%s\x1b[0m`, `Delete midle elements`);
console.log(`fruits:`, fruits);
const deleteItems = fruits.splice(1, 2);
console.log(`fruits.splice(1, 2);`, deleteItems);
console.log(`fruits:`, fruits);
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `Add elements into midle array`);
console.log(`fruits:`, fruits);
console.log(`fruits.splice(1, 0, 'Apple', 'Avocado')`, fruits.splice(1, 0, 'Apple', 'Avocado'));
console.log(`fruits:`, fruits);
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `Replace elements into midle array`);
console.log(`fruits:`, fruits);
const replaceItems = fruits.splice(1, 2, 'Peach', 'Pear');
console.log(`fruits.splice(1, 2, 'Peach', 'Pear')`, replaceItems);
console.log(`fruits:`, fruits);
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `array.splice() => nothing is deleted`);
console.log(`fruits:`, fruits);
console.log(`fruits.splice();`, fruits.splice());
console.log(`fruits:`, fruits);
console.groupEnd();

console.group(
    `\x1b[1m%s\x1b[0m`,
    `if (start < 0 && start > -array.length)  => (start + array.length) is used.`
);
console.log(`fruits:`, fruits);
console.log(`fruits.length:`, fruits.length);
console.log(`fruits.splice(-2);`, fruits.splice(-2));
console.log(`fruits:`, fruits);
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `\nstart < -array.length =>  0 is used.`);
console.log(`fruits:`, fruits);
console.log(
    `fruits.splice(- fruits.length + 1, 1, 'Lemon', 'Lime')`,
    fruits.splice(-fruits.length + 1, 1, 'Lemon', 'Lime')
);
console.log(`fruits:`, fruits);
console.groupEnd();

console.group(
    `\x1b[1m%s\x1b[0m`,
    `\nstart >= array.length -> no element will be delete but the method will behave as an adding function`
);
// start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
console.group(`\x1b[1m%s\x1b[0m`, `start = array.length:`, fruits);
console.log(`fruits:`, fruits);
console.log(
    `fruits.splice(fruits.length, 0, 'Papaya', 'Avocado')`,
    fruits.splice(fruits.length, 0, 'Papaya', 'Avocado')
);
console.log(`fruits:`, fruits);
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `\nstart > array.length:`, fruits);
const extendedArrayLength = fruits.length + 1;
console.log(`fruits:`, fruits);
console.log(
    `fruits.splice(fruits.length + 1, 1, 'Grape', 'Lotus')`,
    fruits.splice(extendedArrayLength, 1, 'Grape', 'Lotus')
);
console.log(`fruits:`, fruits);
console.groupEnd();
console.groupEnd();

// Remove element at specific index using slice method
console.group(`\x1b[1m%s\x1b[0m`, `\nRemove element at specific index using slice method`);

const removeElementAtIndex = (array, index) => {
    if (index >= 0 && index <= array.length) {
        array.splice(index, 1);
        return array;
    }
    throw new Error('Invalid Index');
};
console.log(`removeElementAt(fruits, 3): `, removeElementAtIndex(fruits, 3));
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `Delete all elements`);
console.log(`fruits:`, fruits);
console.log(`fruits.splice(0);`, fruits.splice(0));
console.log(`fruits:`, fruits);
console.groupEnd();

console.group(`\x1b[1m%s\x1b[0m`, `\nAdd items into first array`);
console.log(`fruits:`, fruits);
console.log(
    `fruits.splice(0, 0, 'Longan', 'Watermelon')`,
    fruits.splice(0, 0, 'Longan', 'Watermelon')
);
console.log(`fruits:`, fruits);
console.groupEnd();
console.groupEnd();
