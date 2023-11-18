// 1.  Write a JavaScript function to check whether an `input` is an array or not.
console.group(
    `\x1b[1m%s\x1b[0m`,
    `1. Write a JavaScript function to check whether an 'input' is an array or not`
);
const isArray = (input) => {
    return Array.isArray(input);
};
// Test data
const input1 = 'w3resource';
const input2 = [1, 2, 4, 0];
console.log(`isArray(${input1}):`, isArray(input1));
console.log(`isArray(${input2}):`, isArray(input2));
console.groupEnd();

// 2. Write a JavaScript function to clone an array.
console.group(`\x1b[1m%s\x1b[0m`, `\n2. Write a JavaScript function to clone an array.`);
const arrayClone = (array) => {
    return JSON.parse(JSON.stringify(array));
};
// const deepCopy = structuredClone(currencies);

// Test data:
const array1 = [1, 2, 4, 0];
const array2 = [1, 2, [4, 0]];

console.log(`arrayClone(${array1}):`, arrayClone(array1));
console.log(`arrayClone(${array1}):`, arrayClone(array1));

console.log(`\nstructuredClone(${array2}):`, structuredClone(array2));
console.log(`structuredClone(${array2}):`, structuredClone(array2));

console.groupEnd();

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.`
);
const firstElements = (array, n = 1) => {
    if (!Array.isArray(array) || array.length === 0) return [];
    // return 'Please provide a non-empty array';
    if (!Number.isInteger(n) || n < 0) return [];
    // return 'Please provide a non-negative integer the first n elements of the array.';
    return array.slice(0, n);
};
const arrayDataTest = [7, 9, 0, -2];

// Test data
console.log(`firstElements([${arrayDataTest}]):`, firstElements(arrayDataTest));
console.log(`firstElements([], 3):`, firstElements([], 3));
console.log(`firstElements([${arrayDataTest}], 3):`, firstElements(arrayDataTest, 3));
console.log(`firstElements([${arrayDataTest}], 6):`, firstElements(arrayDataTest, 6));
console.log(`firstElements([${arrayDataTest}], -3):`, firstElements(arrayDataTest, -3));
console.groupEnd();

// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.`
);
const lastElements = (array, n = 1) => {
    if (!Array.isArray(array) || array.length === 0) return [];
    if (!Number.isInteger(n) || n < 0) return [];
    return array.slice(-n);
};

// Test data
console.log(`lastElements([${arrayDataTest}]):`, lastElements(arrayDataTest));
console.log(`lastElements([], 3):`, lastElements([], 3));
console.log(`lastElements([${arrayDataTest}], 3):`, lastElements(arrayDataTest, 3));
console.log(`lastElements([${arrayDataTest}], 6):`, lastElements(arrayDataTest, 6));
console.log(`lastElements([${arrayDataTest}], -3):`, lastElements(arrayDataTest, -3));
console.groupEnd();

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
console.group(
    `\x1b[1m%s\x1b[0m`,
    `\n5. Write a simple JavaScript program to join all elements of the following array into a string.`
);

// Test Data:
const myColor = ['Red', 'Green', 'White', 'Black'];

console.log(myColor.join(', '));
console.log(myColor.join('-'));
console.log(myColor.join('+'));
