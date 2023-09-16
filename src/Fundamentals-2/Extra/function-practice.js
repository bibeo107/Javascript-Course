// Higher Order Functions
// Example: Factorial ----------------------------------------------------------------
const factorial = function factorial(n) {
    switch (true) {
        case n === 0 || n === 1:
            return 1;
        default: {
            let result = 1;
            for (let i = 2; i <= n; i += 1) {
                result *= i;
            }
            return result;
        }
    }
};

const printFactorial = function printFactorial(f, n) {
    switch (true) {
        case Number.isNaN(n):
            console.error(`${n} is not a number`);
            break;
        case n < 0 || typeof n === 'boolean':
            console.error(`${n}! is undefined`);
            break;
        default:
            console.log(`${n}! = `, f(n));
    }
};

printFactorial(factorial, 5);
printFactorial(factorial, 5n);
printFactorial(factorial, 'edgeCaseString');
printFactorial(factorial, true);
printFactorial(factorial, [1, 3]);
printFactorial(factorial, -1);

// Example: 'Ghost say Boo!'  ----------------------------------------------------------------
const ghost = {
    name: 'Casper',
    sayBoo() {
        console.log(` ${this.name} says: Boo!`);
    }
};

ghost.sayBoo(); // Casper says: Boo!
setTimeout(ghost.sayBoo, 1000); //  undefined says: Boo!
setTimeout(ghost.sayBoo.bind(ghost), 1000); // Casper says: Boo!
setTimeout(() => ghost.sayBoo(), 1000); // Casper says: Boo!

// bind object contructors

class Ghost {
    constructor(name) {
        this.name = name;
        this.sayBoo = this.sayBoo.bind(this);
    }

    sayBoo() {
        console.log(`${this.name} says: Boo!`);
    }
}

const blinky = new Ghost('Blinky');
setTimeout(blinky.sayBoo, 1000); // Blinky says: Boo!

// function can be returned from other function ----------------------------------------------------------------
const lastName = function lastName(str1) {
    return function fistName(str2) {
        console.log(`${str2} ${str1}`);
    };
};

let getFullName = lastName('Vu');
getFullName('Thom');
getFullName('Tham');
getFullName('Thoa');

getFullName = lastName('Vo');
getFullName('Tien');
getFullName('Tin');

// Example: calculate diameter, circumeference, area of the circle --------------------------------

const radius = [10, 20, 30];
const diameter = function diameter(r) {
    return r * 2;
};

const circumeference = function circumeference(r) {
    return r * 2 * Math.PI;
};

const area = function area(r) {
    return r * r * Math.PI;
};

const calculate = function calculate(r, logic) {
    const output = [];
    for (let i = 0; i < r.length; i += 1) {
        output.push(logic(r[i]));
    }
    return output;
};

console.log('Diameter ', calculate(radius, diameter));
console.log('Circumeference ', calculate(radius, circumeference));
console.log('Area ', calculate(radius, area));
