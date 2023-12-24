/* eslint-disable vars-on-top */

// Hoisting and TDZ practice

// variables
console.log('\nHoisting and TDZ for variables');

console.log(`var me: ${me}`); // undefined -> hoisting

try {
    console.log(`${job}`); // TDZ
} catch (error) {
    console.error(`Error: ${error.message}`);
}

try {
    console.log(`${year}`); // TDZ
} catch (error) {
    console.error(`Error: ${error.message}`);
}

var me = `Bi`;
let job = ` Quality Engineer`;
const year = 2000;

// -----------------
// Functions
console.log('\nHoisting and TDZ for functions');

// Declare function
console.log(`Declare Function`);

try {
    console.log(addDecl(2, 3)); // TDZ
} catch (error) {
    console.error(`Error: ${error.message}`);
}
function addDecl(a, b) {
    return a + b;
}

// Expression Function
console.log(`\nExpression Function`);

try {
    console.log(addExpr(2, 3)); // TDZ
} catch (error) {
    console.error(`Error: ${error.message}`);
}

let addExpr = function (a, b) {
    return a + b;
};

// Arrow Function
console.log('\nArrow function');

try {
    console.log(addArrow(2, 3));
} catch (error) {
    console.error(`Error: ${error.message}`);
}
const addArrow = (a, b) => a + b;

try {
    console.log(multiply);
    console.log(multiply(2, 3));
} catch (error) {
    console.error(`Error: ${error.message}`);
}

var multiply = (a, b) => a * b;
