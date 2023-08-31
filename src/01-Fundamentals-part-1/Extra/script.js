/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// 1. Hoisting in JavaScript allows you to access functions and variables before they have been created.
/* ----------------------------------------------------------------*/

console.log('1. Hoisting in JavaScript');
// 1.1  Variale Hoisting
console.log('1.2 Variable Hoisting ');
console.log(bar); // undefined
var bar = 1;

try {
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    let foo = 2; // TDZ
} catch (e) {
    console.log(e.message);
}
try {
    console.log(foobar); // ReferenceError: Cannot access 'foo' before initialization
    let foobar = 3; // TDZ
} catch (e) {
    console.log(e.message);
}

//----------------------------------------------------------------
// 1.2 Function Hoisting
console.log('1.2 Hoisting function declarations');

console.log(square(5)); // 25

function square(n) {
    return n * n;
}

// Note: Function hoisting don't work with function expressions and arrow functions.
try {
    console.log(add(3, 5));
    var add = function (i, j) {
        return i + j;
    };
} catch (e) {
    console.log(e.message);
}

try {
    console.log(addArrowFunc(3, 6));
    var addArrowFunc = (i, j) => {
        return i + j;
    };
} catch (e) {
    console.log(e.message);
}

//----------------------------------------------------------------
// 1.3 Class Hoisting
console.log('1.3 Class declaration hoisting');

try {
    var Frodo = new Hobbit();
    Frodo.height = 100;
    Frodo.weight = 300;
    console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

    class Hobbit {
        constructor(height, weight) {
            this.height = height;
            this.weight = weight;
        }
    }
} catch (e) {
    console.log(e.message);
}

//----------------------------------------------------------------
// Import Hoisting

// 2. Logical Operators
// Task
console.log(console.log(1) && console.log(2)); // 1 & undefined

let age = 30;
// Write an if condition to check that age is between 14 and 90 inclusively.
if (age >= 14 && age <= 90) console.log('age is between 14 and 90 inclusively.');

age = 10;
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
if (!(age >= 14 && age <= 90))
    console.log('use NOT operator: age is NOT between 14 and 90 inclusively.');
if (age < 14 || age > 90) console.log('Use OR operator: age is NOT between 14 and 90 inclusively.');

//----------------------------------------------------------------
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive ...');
}

//----------------------------------------------------------------
/* Task: Check the login
Write the code which asks for a login with prompt.
If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
The password is checked as follows:
    + If it equals “TheMaster”, then show “Welcome!”,
    + Another string – show “Wrong password”,
    + For an empty string or cancelled input, show “Canceled”
*/

const prompt = require('prompt-sync')();

let visitor = prompt('please enter who\'s are you');

if (visitor === 'Admin') {
    let password = prompt('please enter your password');
    if (password === '' || password === null) console.log('Canceled');
    else if (password === 'TheMaster') console.log('Welcome!');
    else console.log('Wrong password');
} else if (visitor === '' || visitor === null) {
    console.log('Canceled');
} else console.log('I don\'t know you');
