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
    var add = function(i, j) {
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
