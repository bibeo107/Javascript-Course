/* eslint-disable no-compare-neg-zero */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-self-compare */
/* eslint-disable quotes */
/* eslint-disable use-isnan */
/* eslint-disable yoda */
/* eslint-disable eqeqeq */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

// 1. Hoisting in JavaScript allows you to access functions and variables before they have been created.
// ----------------------------------------------------------------

console.log('1. Hoisting in JavaScript');
// 1.1  Variale Hoisting
console.log('1.2 Variable Hoisting ');
console.log(bar);
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

console.log(square(5));

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
    console.log(Frodo);

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

// 2. Equality Operators
//----------------------------------------------------------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
console.log('2. Equality Operators');
console.log('2.1 Double Equality Operators');
// Detail: https://262.ecma-international.org/5.1/#sec-11.9.3

// Primitive data types
console.log('0 == -0 ->', 0 == -0);
console.log('1 == -1 ->', 1 == -1);
console.log(`'hello' == 'Hello' ->`, 'hello' == 'Hello');
console.log(`Symbol('id') == Symbol('id') ->`, Symbol('id') == Symbol('id'));

// Note: falsy comparison -> false, 0, and '' are loosely equal
console.log(`'' == null ->`, '' == null);
console.log('false == 0 ->', false == 0);
console.log('null == 0 ->', null == 0);
console.log('false == null ->', false == null);
console.log('undefined == undefined ->', undefined == undefined);
console.log('undefined == null ->', undefined == null);

// abstract data types
console.log(`[] == false ->`, []== false); // true
console.log(`{} == false ->`, {} == false); // false

const obj = {a:1};
const sameValueObj = {a:1};
const arr = [1];
const sameValueArr = [1];
const func = function(){};
const sameValueFunc = function(){};

console.log('obj == obj ->', obj == obj);
console.log('obj == sameValueObj ->', obj == sameValueObj);
console.log('arr == arr ->', arr == arr);
console.log('arr == sameValueArr ->', arr == sameValueArr);
console.log('func == func ->', func == func );
console.log('func == sameValueFunc ->', func == sameValueFunc );

// special case
console.log('NaN == NaN ->', NaN == NaN);
console.log('Infinity == Infinity ->', Infinity == Infinity);
console.log(`1/0 == Infinity ->`, 1/0 == Infinity);

// 3. Logical Operators
//----------------------------------------------------------------
console.log('3. Logical Operators');

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

// let visitor = prompt('please enter who\'s are you');
let visitor = ''; // skip prompt() enter visitor

if (visitor === 'Admin') {
    let password = prompt('please enter your password');
    if (password === '' || password === null) console.log('Canceled');
    else if (password === 'TheMaster') console.log('Welcome!');
    else console.log('Wrong password');
} else if (visitor === '' || visitor === null) {
    console.log('Canceled');
} else console.log("I don't know you");
