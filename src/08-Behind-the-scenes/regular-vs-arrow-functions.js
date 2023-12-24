/* eslint-disable no-undef */
/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
/* eslint-disable no-var */
var firstName = 'Gabrielle'; // create properties on window
// const firstName = 'Gabrielle'; // not create properties on window
const currentYear = new Date().getFullYear();

// 1.Regular function with the this keyword
const james = {
    firstName: 'James',
    year: 1989,
    calAge() {
        console.log(currentYear - this.year);
        const self = this;
        const isMillenial = function () {
            console.log(`this ${this}`);
            console.log(`self: ${self}`);
            console.log(`isMillenial: ${self.year >= 1981 && self.year <= 1996}`);
        };
        isMillenial();
    }
};

james.calAge();

// 2.Arrow function - DON'T have their own the `this` keyword

// 2.1 Should not use arrow function for method in Object
const natalie = {
    firstName: 'Natalie',
    year: 2000,
    greet: () => {
        try {
            console.log(this); // `this` in console ( web) => window, in console run by node command => undefined
            console.log(`Hi ${this.firstName}`); // this.firstName still show in the console when run in web browser  AND error when run with node command
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }
};
natalie.greet();

const mike = {
    firstName: 'Mike',
    year: 1986,
    calAge() {
        console.log(currentYear - this.year);
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    }
};

mike.calAge();

// arguments keyword

// 1.Regular function
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(addExpr(10, 7, 9));

// 2.Arrow function - DON'T have their own `argument` object.
const addArrow = (a, b) => {
    try {
        console.log(arguments);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
    return a + b;
};

addArrow(10, 7, 9);

// using Rest parameters in arrow function
const sumArrow = function (...args) {
    console.log(args);
    return args.reduce((sum, current) => sum + current, 0);
};

console.log(addExpr(10, 7, 9));
