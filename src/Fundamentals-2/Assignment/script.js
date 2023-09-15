/* eslint-disable func-names */
// Lecture: function --------------------------------------------------------
function describeCountry(country, popuation, capitalCity) {
    return `${country} has ${popuation} milion people and its capital city is ${capitalCity}`;
}
const describleIndia = describeCountry('India', 'New Delhi', 1430);
const describleJapan = describeCountry('Japan', 'Tokyo', 14);
const describleIndonesia = describeCountry('Indonesia', 'Jakarta', 15);
console.log(describleIndia, describleJapan, describleIndonesia);

const worldPopulation = 7900;

// function declarations ----------------------------------------------------------------
function percentageOfWorld1(popuation) {
    return (popuation / worldPopulation) * 100;
}
const percentIndia = percentageOfWorld1(1430);
const percentJapan = percentageOfWorld1(14);
const percentIndonesia = percentageOfWorld1(15);

console.log(percentIndia, percentJapan, percentIndonesia);

// function expressions
//----------------------------------------------------------------
const percentageOfWorld2 = function (popuation) {
    return (popuation / worldPopulation) * 100;
};
const percentIndia1 = percentageOfWorld2(1430);
const percentJapan1 = percentageOfWorld2(14);
const percentIndonesia1 = percentageOfWorld2(15);

console.log(percentIndia1, percentJapan1, percentIndonesia1);

// treat function as values. ----------------------------------------------------------------

function dog() {
    console.log('woof');
}

const sausageDog = dog;

sausageDog();
dog();

// passing functions as arguments
// Example: Factorial ----------------------------------------------------------------
const factorial = function (n) {
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

const printFactorial = function (f, n) {
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

// Example: filer array ----------------------------------------------------------------
const filterArray = function (array, filterFunction) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (filterFunction(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};

const isEven = function (number) {
    return number % 2 === 0;
};

const isOld = function (number) {
    return number % 2 === 1;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbers, isEven);
const oldNumbers = filterArray(numbers, isOld);

console.log(`Even numbers: ${evenNumbers}`);
console.log(`Old numbers: ${oldNumbers}`);

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

// function can be returned from other function
const lastName = function (str1) {
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

//----------
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

let result = multiplyBy(2);
console.log(result(10));
console.log(result(20));

result = multiplyBy(3);
console.log(result(10));
console.log(result(20));

// arrow functions ------------------------------------------------------------------------------
const percentageOfWorld3 = (popuation) => {
    return (popuation / worldPopulation) * 100;
};
const percentIndia2 = percentageOfWorld2(1430);
const percentJapan2 = percentageOfWorld2(14);
const percentIndonesia3 = percentageOfWorld2(15);

console.log(percentIndia1, percentJapan1, percentIndonesia1);
